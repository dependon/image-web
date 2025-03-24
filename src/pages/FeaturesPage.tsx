import React from 'react';
import { Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';

const FeaturesPage: React.FC = () => {
  return (
    <Container>
      <h1 className="text-center my-5">功能特点</h1>
      
      <Row className="mb-5">
        <Col>
          <p className="lead text-center">
            Simple Image Filter 提供多种图像处理功能，让您轻松编辑和美化图片
          </p>
        </Col>
      </Row>

      <Tabs defaultActiveKey="basic" id="features-tabs" className="mb-5">
        <Tab eventKey="basic" title="基础图像处理">
          <Row className="py-4">
            <Col md={6}>
              <h3>旋转功能</h3>
              <p>
                支持图像旋转和翻转，您可以轻松调整图像方向，修正倾斜的照片。
                软件提供精确的角度控制，让您能够完美调整图像的方向。
              </p>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <img 
                  src="/images/simple-image-filter.png" 
                  alt="旋转功能示例" 
                  className="img-fluid rounded shadow" 
                  style={{ maxWidth: '300px' }}
                />
              </div>
            </Col>
          </Row>
          
          <hr className="my-4" />
          
          <Row className="py-4">
            <Col md={6} className="order-md-2">
              <h3>裁剪功能</h3>
              <p>
                精确裁剪功能，帮助您获得完美构图。您可以自由选择裁剪区域，
                调整大小和比例，去除不需要的部分，突出照片的主体。
              </p>
            </Col>
            <Col md={6} className="order-md-1">
              <div className="text-center">
                <img 
                  src="/images/simple-image-filter.png" 
                  alt="裁剪功能示例" 
                  className="img-fluid rounded shadow" 
                  style={{ maxWidth: '300px' }}
                />
              </div>
            </Col>
          </Row>
          
          <hr className="my-4" />
          
          <Row className="py-4">
            <Col md={6}>
              <h3>基础美化</h3>
              <p>
                提供基础的图像美化功能，包括亮度调整、对比度增强、锐化等，
                让您的照片更加清晰、鲜明，色彩更加丰富。
              </p>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <img 
                  src="/images/simple-image-filter.png" 
                  alt="基础美化示例" 
                  className="img-fluid rounded shadow" 
                  style={{ maxWidth: '300px' }}
                />
              </div>
            </Col>
          </Row>
        </Tab>
        
        <Tab eventKey="filters" title="滤镜效果">
          <Row className="mb-4 mt-4">
            <Col>
              <h3 className="text-center mb-4">多种滤镜效果</h3>
              <p className="text-center">
                Simple Image Filter 提供多种滤镜效果，让您的照片呈现不同风格和氛围。
                以下是一些主要的滤镜效果展示：
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Header as="h5">暖色滤镜</Card.Header>
                <Card.Body>
                  <div className="text-center mb-3">
                    <img 
                      src="/images/simple-image-filter.png" 
                      alt="暖色滤镜示例" 
                      className="img-fluid rounded" 
                      style={{ maxWidth: '200px' }}
                    />
                  </div>
                  <Card.Text>
                    增强图像中的红色和黄色调，营造温暖、舒适的氛围，
                    适合日落、人像等照片。
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card>
                <Card.Header as="h5">冷色滤镜</Card.Header>
                <Card.Body>
                  <div className="text-center mb-3">
                    <img 
                      src="/images/simple-image-filter.png" 
                      alt="冷色滤镜示例" 
                      className="img-fluid rounded" 
                      style={{ maxWidth: '200px' }}
                    />
                  </div>
                  <Card.Text>
                    增强图像中的蓝色和青色调，营造清凉、冷静的氛围，
                    适合冬季、水景等照片。
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card>
                <Card.Header as="h5">灰度滤镜</Card.Header>
                <Card.Body>
                  <div className="text-center mb-3">
                    <img 
                      src="/images/simple-image-filter.png" 
                      alt="灰度滤镜示例" 
                      className="img-fluid rounded" 
                      style={{ maxWidth: '200px' }}
                    />
                  </div>
                  <Card.Text>
                    将彩色图像转换为黑白图像，突出照片的形状、纹理和对比度，
                    营造经典、怀旧的氛围。
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card>
                <Card.Header as="h5">反色滤镜</Card.Header>
                <Card.Body>
                  <div className="text-center mb-3">
                    <img 
                      src="/images/simple-image-filter.png" 
                      alt="反色滤镜示例" 
                      className="img-fluid rounded" 
                      style={{ maxWidth: '200px' }}
                    />
                  </div>
                  <Card.Text>
                    将图像颜色反转，创造出独特的视觉效果，
                    适合艺术创作和特殊效果。
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card>
                <Card.Header as="h5">老照片滤镜</Card.Header>
                <Card.Body>
                  <div className="text-center mb-3">
                    <img 
                      src="/images/simple-image-filter.png" 
                      alt="老照片滤镜示例" 
                      className="img-fluid rounded" 
                      style={{ maxWidth: '200px' }}
                    />
                  </div>
                  <Card.Text>
                    模拟老照片的效果，添加复古色调和纹理，
                    营造怀旧、历史感的氛围。
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default FeaturesPage;
