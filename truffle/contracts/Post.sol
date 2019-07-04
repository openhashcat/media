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
    bytes32[] list;
    
    function getPostProfile(bytes32 _id) external view returns(string) {
        return posts[_id];
    }
    
    function newPostProfile(bytes32 _id,string _profile) external {
        bytes32 id = keccak256(abi.encodePacked(_profile));
        require(id == _id);
        posts[id] = _profile;
        list.push(id);
    }
    
    function totalPost() external view returns(uint256) {
        return list.length;
    }
    
    function getIndex(uint256 _pos) external view returns(bytes32) {
        return list[_pos];
    }
}

