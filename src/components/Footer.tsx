import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <div className="text-center">
          <p>Simple Image Filter 是一款基于 Qt 的开源图像处理软件</p>
          <p>
            <a href="https://github.com/dependon/simple-image-filter" className="text-light" target="_blank" rel="noopener noreferrer">
              GitHub 仓库
            </a> | 
            <a href="mailto:liuminghang0821@gmail.com" className="text-light">
              联系作者
            </a>
          </p>
          <p className="mb-0">
            <small>版权所有 © 2020 ~ 2022 LiuMingHang. 基于 GPLv3+ 协议发布</small>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
