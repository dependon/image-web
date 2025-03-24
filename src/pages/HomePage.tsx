import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const HomePage: React.FC = () => {
  return (
    <Container>
      {/* 顶部横幅 */}
      <Row className="py-5 text-center bg-light rounded mb-5">
        <Col>
          <h1 className="display-4">Simple Image Filter</h1>
          <p className="lead">一款简单易用的图像处理工具，支持旋转、裁剪、美化和多种滤镜效果</p>
          <Button variant="primary" size="lg" href="/download">立即下载</Button>
        </Col>
      </Row>

      {/* 软件简介 */}
      <Row className="mb-5">
        <Col md={12}>
          <h2 className="text-center mb-4">软件简介</h2>
          <p className="text-center">
            Simple Image Filter 是一款基于Qt开发的图像处理软件，提供了丰富的图像处理功能，包括旋转、裁剪、基础美化和多种滤镜效果。
            软件界面简洁直观，操作简单，适合各类用户使用。无论是日常照片处理还是简单的图像编辑，Simple Image Filter 都能满足您的需求。
          </p>
        </Col>
      </Row>

      {/* 主要特点概览 */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">主要特点</h2>
        </Col>
      </Row>
      <Row className="mb-5 text-center">
        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <h3>图像旋转</h3>
              <p>支持图像旋转和翻转，轻松调整图像方向</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <h3>图像裁剪</h3>
              <p>精确裁剪功能，帮助您获得完美构图</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <h3>基础美化</h3>
              <p>提供基础的图像美化功能，让照片更加出彩</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <h3>多种滤镜</h3>
              <p>包含暖色、冷色、灰度、反色和老照片等多种滤镜效果</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 软件截图展示 */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">软件截图</h2>
          <div className="text-center">
            <img 
              src="/images/simple-image-filter.png" 
              alt="Simple Image Filter Logo" 
              className="img-fluid mb-3" 
              style={{ maxWidth: '200px' }}
            />
            <p className="text-muted">更多截图请查看功能特点页面</p>
          </div>
        </Col>
      </Row>

      {/* 快速下载按钮 */}
      <Row className="py-4 text-center bg-light rounded mb-5">
        <Col>
          <h2>准备好了吗？</h2>
          <p>立即下载 Simple Image Filter，体验简单而强大的图像处理功能</p>
          <Button variant="success" size="lg" href="/download">Windows 版本下载</Button>
          <p className="mt-2">
            <small>也可以查看 <a href="/download">Linux 安装指南</a></small>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
