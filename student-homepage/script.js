// script.js

// 게시글을 저장할 배열
let posts = [];

document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postList = document.getElementById('postList');

    postForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const postInput = document.getElementById('postInput');
        const postText = postInput.value.trim();

        if (postText) {
            addPost(postText);
            postInput.value = '';
        }
    });

    function addPost(text) {
        posts.push(text);
        renderPosts();
    }

    // 게시글을 화면에 출력하는 함수
    function renderPosts() {
        const postsDiv = document.getElementById('posts');
        postsDiv.innerHTML = '';
        posts.forEach((post, idx) => {
            const postElem = document.createElement('div');
            postElem.className = 'post';
            postElem.textContent = `${idx + 1}. ${post}`;
            postsDiv.appendChild(postElem);
        });
    }

    // 페이지 로드 시 게시글 표시
    window.onload = renderPosts;
});