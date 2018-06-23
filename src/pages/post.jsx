import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PostPageStyle = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  margin-top: 50px;
  color: red;

  .postPageImgCover {
    width: 100%;
    background-image: url("https://source.unsplash.com/collection/190727");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .postPageText {
    margin-top: 50px;

    h1 {
      margin: 0;
    }

    p {
      width: 90%;
      margin-bottom: 0;
    }
  }

  .postPageImgCover::before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 56.25%;
  }
`;

const PostPage = () => (
  <PostPageStyle>
    <div className="postPageImgCover"></div>
    <div className="postPageText">
      <h1>23/07/2018</h1>
      <h4>1^ Uscita</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida et. Integer lectus nisi, facilisis sit amet eleifend nec, pharetra ut augue. Integer quam nunc, consequat nec egestas ac, volutpat ac nisi. Sed consectetur dignissim dignissim. Donec pretium est sit amet ipsum fringilla feugiat. Aliquam erat volutpat. Maecenas scelerisque, orci sit amet cursus tincidunt, libero nisl eleifend tortor, vitae cursus risus mauris vitae nisi. Cras laoreet ultrices ligula eget tempus. Aenean metus purus, iaculis ut imperdiet eget, sodales et massa. Duis pellentesque nisl vel massa dapibus non lacinia velit volutpat. Maecenas accumsan interdum</p>
    </div>
    <PostPageImgContainer />
  </PostPageStyle>
)

const PostPageImgContainerStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 50px;
  margin-bottom: 30px;

  div {
    width: 100%;
    display: block;
    background-image: url("https://source.unsplash.com/collection/190727");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  div::before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 56.25%;
  }
`;

const PostPageImgContainer = () => (
  <PostPageImgContainerStyle>
    <Link to=""><div></div></Link>
    <Link to=""><div></div></Link>
    <Link to=""><div></div></Link>
  </PostPageImgContainerStyle>
)

export default PostPage