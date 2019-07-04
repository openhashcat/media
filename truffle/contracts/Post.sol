pragma solidity ^0.4.24;

interface Post {
    function getPostProfile(bytes32 _id) external view returns(string);
    function newPostProfile(bytes32 _id, string _profile) external;
}

interface PostEnumerable {
    function totalPost() external view returns(uint256);
    function getIndex(uint256 _pos) external view returns(bytes32);
}

contract MedLinker is Post,PostEnumerable {
    mapping(bytes32 => string) posts;
    mapping(bytes32 => uint256) blocks;
    bytes32[] list;
    
    function getPostProfile(bytes32 _id) external view returns(string) {
        return posts[_id];
    }
    
    function newPostProfile(bytes32 _id,string _profile) external {
        bytes32 id = keccak256(abi.encodePacked(_profile));
        // 索引相等
        require(id == _id);
        // 不可重复
        require(keccak256(abi.encodePacked(posts[id])) == keccak256(abi.encodePacked('')));
        // 存储profile
        posts[id] = _profile;
        list.push(id);
        // 存储block
        blocks[id] = block.number;
    }
    
    function totalPost() external view returns(uint256) {
        return list.length;
    }
    
    function getIndex(uint256 _pos) external view returns(bytes32) {
        return list[_pos];
    }
}
