import React from 'react';
import git from '../git.svg';
import styled from 'styled-components';


const Footer = (props) => {
  return (

<Foot className=" tc footer-social-icons">
 {/* @import url(https://fonts.googleapis.com/css?family=Lato);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);*/}
    <div className='fl w-30 pa2 ml5'>
	    <h4 className="-14">Follow us on</h4>
    </div>
    <div className='fl w-30 pa2'>
	     <ul className="social-icons ">
	        <li><a href="" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
	        <li><a href="" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
	        <li><a href="" className="social-icon"> <i className="fa fa-rss"></i></a></li>
	        <li><a href="" className="social-icon"> <i className="fa fa-youtube"></i></a></li>
	        <li><a href="" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
	        <li><a href="" className="social-icon"> <i className="fa fa-google-plus"></i></a></li>
	    </ul>
    </div>

</Foot>

	)
}

export default Footer;


const Foot = styled.div `
_14 {
	position:absolute;
   text-align:right;
}
a {
    text-decoration: none;
    color: #fff;
}
p:hover .a{
    color: #d9d9d9;
    text-decoration:  underline;
}

h4 {
    margin:  1% 0 1% 0;
}

ul {
    margin:2;
    list-style: none;
}
.footer-social-icons {
    width: 350px;
    display:block;
    margin: 0 auto;
}
.social-icon {
    color: #fff;
}
ul.social-icons {
    margin-top: 10px;
}
.social-icons li {
    vertical-align: top;
    display: inline;
    height: 100px;
}
.social-icons a {
    color: #fff;
    text-decoration: none;
}
.fa-facebook {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
}
.fa-facebook:hover {
    background-color: #3d5b99;
}
.fa-twitter {
    padding:10px 12px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
}
.fa-twitter:hover {
    background-color: #00aced;
}
.fa-rss {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
}
.fa-rss:hover {
    background-color: #eb8231;
}
.fa-youtube {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
}
.fa-youtube:hover {
    background-color: #e64a41;
}
.fa-linkedin {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
}
.fa-linkedin:hover {
    background-color: #0073a4;
}
.fa-google-plus {
    padding:10px 9px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
}
.fa-google-plus:hover {
    background-color: #e25714;
}
`;