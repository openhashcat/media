/* eslint-disable */
import Web3 from 'web3';

class MedLinker {
    constructor(abi, address) {
        let provider;
        if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
            // Web3 browser user detected. You can now use the provider.
            provider = window['ethereum'] || window.web3.currentProvider;
            this.writeable = true;
        } else {
            provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/e98a8cf4294243dfa895c02bfe2671aa');
            this.writeable = false;
        }
        this.web3 = new Web3(provider);
        this.abi = new this.web3.eth.Contract(abi, address);
    }

    async upload(value) {
        let str = this.web3.utils.utf8ToHex(JSON.stringify(value));
        let hv = this.web3.sha3(str);
        let callable = this.abi.methods.newPostProfile(hv, str);
        const accounts = await ethereum.enable();
        let r = await callable.send({from:accounts[0]});
        return hv;
    }

    async get(id) {
        let r = await this.abi.methods.getPostProfile(id).call();
        let post = JSON.parse(this.web3.utils.toUtf8(r));
        post.id = id;
        post.block_number = await this.abi.methods.getBlockNumber(id).call();
        
        return post;
    }

    async getList(page, count) {
        let result = {};
        result.data = [];
        result.total = await this.abi.methods.totalPost().call();
        if (result.total == undefined) {
            return false;
        } else {
            let begin = page * count;
            let end = (page + 1) * count;
            // console.log(begin, end)
            if (result.total - 1 < begin) {
                return result;
            } else if (result.total > begin && result.total <= end) {
                end = result.total;
            }
            // do query
            for (let i = begin; i != end; i ++) {
                let id = await this.abi.methods.getIndex(i).call();
                let post;
                if (id == undefined) {
                    return false;
                } else {
                    let r = await this.abi.methods.getPostProfile(id).call();
                    let block_number = await this.abi.methods.getBlockNumber(id).call();
                    // console.log(r);
                    try {
                        post = JSON.parse(web3.toUtf8(r));
                    } catch (e) {
                        post = {}
                    }
                    post.id = id;
                    post.block_number = block_number;
                    result.data.push(post);
                }
            }
        }
        return result;
    }
}

export default MedLinker;
