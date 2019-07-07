<template>
    <div>
        <b-row>
            <b-col md="8" offset-md="2">
                <b-alert variant="success" v-if="status.post.success" show>上传成功。文章ID为：{{ status.post.id }}</b-alert>
                <b-alert variant="danger" v-if="status.post.failed" show>上传失败，请重试。</b-alert>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="2" offset-md="2" cols="3">
                <label for="post-name">文章标题：</label>
            </b-col>
            <b-col md="6" cols="9">
                <b-form-input id="post-name" type="text" v-model="data.name"></b-form-input>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col md="2" offset-md="2" cols="3">
                <label for="post-author">文章作者：</label>
            </b-col>
            <b-col md="6" cols="9">
                <b-form-input id="post-author" type="text" v-model="data.author"></b-form-input>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col md="2" offset-md="2" cols="3">
                <label for="post-author">文章链接：</label>
            </b-col>
            <b-col md="6" cols="9">
                <b-button type="submit" variant="primary" v-on:click="addUrl">添加链接</b-button>
            </b-col>
        </b-row>
        <br>
        <!-- 增加 -->
        <div v-for="i in data.urls.length" :key="i">
            <b-row>
                <b-col md="2" offset-md="2" cols="3"></b-col>
                <b-col md="6" cols="9">
                    <b-input-group class="mt-3">
                        <b-form-input :id="`post-${i-1}`" type="text" v-model="data.urls[i-1]"></b-form-input>
                        <b-input-group-append>
                            <b-button variant="primary" v-on:click="deleteUrl(i-1)">删除</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-col>
            </b-row>
            <br>
        </div>
        <hr>
        <b-row>
            <b-col md="2" offset-md="2" cols="3"></b-col>
            <b-col md="6" cols="9">
                <b-button 
                          variant="primary" 
                          v-on:click="uploadProfile()"
                          :disabled="status.uploader.upload">
                    <span v-if="status.uploader.upload">
                        <b-spinner small></b-spinner>
                        上传中 ...
                    </span>
                    <span v-if="!status.uploader.upload">
                        上传
                    </span>
                </b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import MedLinker from '../Show/Main/utils/index.js';
import abi from '../Show/Main/utils/abi.js';

export default {
    data() {
        return {
            data: {
                name: '',
                author: '',
                urls: [],
            },
            status: {
                uploader: {
                    upload: false,
                },
                post: {
                    id: '',
                    success: false,
                    failed: false,
                }
            }
        }
    },
    methods: {
        addUrl() {
            this.data.urls.push('');
        },
        deleteUrl(i) {
            if (this.data.urls.length >= 0) {
                this.data.urls.splice(i,1);
            }
        },
        async uploadProfile() {
            let w = new MedLinker(abi, '0x5fc35f37ca8c57f71f720a01c67a63db63d1efb0');
            this.status.uploader.upload = true;
            let pid = await w.upload(this.data);
            this.status.uploader.upload = false;
            if ( pid == false) {
                this.status.post.failed = true;
                this.status.post.success = false;
            } else {
                this.status.post.id = pid;
                this.status.post.success = true;
                this.status.post.failed = false;
            }
        }
    }
}
</script>

