import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';

const DownloadPage: React.FC = () => {
  return (
    <Container>
      <h1 className="text-center my-5">下载 Simple Image Filter</h1>
      
      <Row className="mb-5">
        <Col>
          <p className="lead text-center">
            选择适合您操作系统的版本进行下载和安装
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Header as="h3" className="text-center">Windows 版本</Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Text>
                Windows 版本提供了完整的图像处理功能，包括旋转、裁剪、基础美化和多种滤镜效果。
                下载后直接运行即可使用，无需复杂的安装过程。
              </Card.Text>
              <div className="mt-auto text-center">
                <Button 
                  variant="primary" 
                  size="lg" 
                  href="https://github.com/dependon/simple-image-filter/releases/download/1.1.0/simple_image.exe"
                  className="mb-2"
                >
                  下载 Windows 版本
                </Button>
                <p className="text-muted mb-0">版本: 1.1.0 | 直接下载链接</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Header as="h3" className="text-center">中文网盘下载</Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Text>
                如果您无法直接从GitHub下载，可以使用以下中文网盘链接进行下载。
                下载后直接运行即可使用，无需复杂的安装过程。
              </Card.Text>
              <div className="mt-auto text-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  href="https://depend.lanzouo.com/i6tCpxdfg6d"
                  className="mb-2"
                >
                  中文网盘下载
                </Button>
                <p className="text-muted mb-0">提取密码: 8s3b</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">Linux 安装指南</h2>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Header as="h3">Arch Linux 安装</Card.Header>
            <Card.Body>
              <p>在 Arch Linux 上，您可以使用 yay 包管理器轻松安装：</p>
              <div className="bg-dark text-light p-3 rounded">
                <code>yay -s simple-image-filter-git</code>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Header as="h3">Deepin/Debian 构建</Card.Header>
            <Card.Body>
              <p>在 Deepin 或 Debian 系统上，您可以按照以下步骤从源代码构建：</p>
              <ListGroup variant="flush">
                <ListGroup.Item>1. 安装依赖: <code>sudo apt install qtcreator</code></ListGroup.Item>
                <ListGroup.Item>2. 克隆仓库: <code>git clone https://github.com/dependon/simple-image-filter.git</code></ListGroup.Item>
                <ListGroup.Item>3. 创建构建目录: <code>mkdir build</code></ListGroup.Item>
                <ListGroup.Item>4. 进入构建目录: <code>cd build</code></ListGroup.Item>
                <ListGroup.Item>5. 运行 qmake: <code>qmake ..</code></ListGroup.Item>
                <ListGroup.Item>6. 编译: <code>make</code></ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Card>
            <Card.Header as="h3">从源代码构建</Card.Header>
            <Card.Body>
              <p>
                如果您想从源代码构建 Simple Image Filter，可以从 GitHub 仓库获取最新的源代码：
              </p>
              <div className="text-center mb-4">
                <Button 
                  variant="outline-dark" 
                  size="lg" 
                  href="https://github.com/dependon/simple-image-filter"
                  target="_blank"
                >
                  访问 GitHub 仓库
                </Button>
              </div>
              <p>
                仓库中包含了完整的源代码和构建说明，您可以根据自己的需求进行修改和定制。
                如果您对项目有任何改进建议，欢迎提交 Pull Request 或创建 Issue。
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DownloadPage;
