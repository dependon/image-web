import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';

const DocsPage: React.FC = () => {
  return (
    <Container>
      <h1 className="text-center my-5">文档</h1>
      
      <Row className="mb-5">
        <Col>
          <p className="lead text-center">
            了解如何安装和使用 Simple Image Filter，充分发挥其图像处理功能
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">软件安装指南</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Windows 安装指南</Accordion.Header>
              <Accordion.Body>
                <ol>
                  <li>从<a href="/download">下载页面</a>获取最新的 Windows 版本</li>
                  <li>下载完成后，双击 <code>simple_image.exe</code> 文件</li>
                  <li>软件无需安装，直接运行即可使用</li>
                  <li>如果遇到安全警告，请点击"仍然运行"</li>
                </ol>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Arch Linux 安装指南</Accordion.Header>
              <Accordion.Body>
                <p>在 Arch Linux 上，您可以使用 yay 包管理器安装：</p>
                <div className="bg-dark text-light p-3 rounded mb-3">
                  <code>yay -s simple-image-filter-git</code>
                </div>
                <p>安装完成后，您可以在应用程序菜单中找到 Simple Image Filter，或者在终端中运行：</p>
                <div className="bg-dark text-light p-3 rounded">
                  <code>simple-image-filter</code>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Deepin/Debian 构建指南</Accordion.Header>
              <Accordion.Body>
                <p>在 Deepin 或 Debian 系统上，您需要从源代码构建：</p>
                <ol>
                  <li>
                    安装必要的依赖：
                    <div className="bg-dark text-light p-2 rounded my-2">
                      <code>sudo apt install qtcreator</code>
                    </div>
                  </li>
                  <li>
                    克隆 GitHub 仓库：
                    <div className="bg-dark text-light p-2 rounded my-2">
                      <code>git clone https://github.com/dependon/simple-image-filter.git</code>
                    </div>
                  </li>
                  <li>
                    创建并进入构建目录：
                    <div className="bg-dark text-light p-2 rounded my-2">
                      <code>mkdir build && cd build</code>
                    </div>
                  </li>
                  <li>
                    运行 qmake：
                    <div className="bg-dark text-light p-2 rounded my-2">
                      <code>qmake ..</code>
                    </div>
                  </li>
                  <li>
                    编译项目：
                    <div className="bg-dark text-light p-2 rounded my-2">
                      <code>make</code>
                    </div>
                  </li>
                  <li>
                    运行程序：
                    <div className="bg-dark text-light p-2 rounded my-2">
                      <code>./simple-image-filter</code>
                    </div>
                  </li>
                </ol>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">基本使用教程</h2>
          <Card className="mb-4">
            <Card.Body>
              <h3>打开图像</h3>
              <p>
                启动 Simple Image Filter 后，您可以通过以下方式打开图像：
              </p>
              <ul>
                <li>点击工具栏中的"打开"按钮</li>
                <li>使用快捷键 Ctrl+O</li>
                <li>将图像文件拖放到程序窗口中</li>
              </ul>
              <p>
                支持的图像格式包括：JPG、PNG、BMP、GIF 等常见格式。
              </p>
            </Card.Body>
          </Card>
          
          <Card className="mb-4">
            <Card.Body>
              <h3>保存图像</h3>
              <p>
                处理完图像后，您可以通过以下方式保存：
              </p>
              <ul>
                <li>点击工具栏中的"保存"按钮</li>
                <li>使用快捷键 Ctrl+S</li>
                <li>从菜单中选择"文件 {'->'} 保存"或"文件 {'->'} 另存为"</li>
              </ul>
              <p>
                您可以选择保存为不同的图像格式，如 JPG、PNG、BMP 等。
              </p>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <h3>界面导航</h3>
              <p>
                Simple Image Filter 的界面主要包括以下部分：
              </p>
              <ul>
                <li><strong>工具栏</strong>：包含常用操作按钮，如打开、保存、旋转等</li>
                <li><strong>侧边栏</strong>：包含各种滤镜和效果选项</li>
                <li><strong>主视图</strong>：显示当前编辑的图像</li>
                <li><strong>状态栏</strong>：显示图像信息和操作提示</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">功能详解</h2>
          
          <h3 className="mb-3">基础图像处理</h3>
          <Card className="mb-4">
            <Card.Body>
              <h4>旋转和翻转</h4>
              <p>
                您可以使用工具栏中的旋转按钮对图像进行旋转和翻转：
              </p>
              <ul>
                <li>向左旋转 90 度</li>
                <li>向右旋转 90 度</li>
                <li>水平翻转</li>
                <li>垂直翻转</li>
              </ul>
            </Card.Body>
          </Card>
          
          <Card className="mb-4">
            <Card.Body>
              <h4>裁剪</h4>
              <p>
                裁剪功能允许您选择图像的特定区域：
              </p>
              <ol>
                <li>点击工具栏中的"裁剪"按钮</li>
                <li>在图像上拖动鼠标选择要保留的区域</li>
                <li>调整选择框的大小和位置</li>
                <li>点击"确认"按钮完成裁剪</li>
              </ol>
            </Card.Body>
          </Card>
          
          <h3 className="mb-3">滤镜使用指南</h3>
          <Card>
            <Card.Body>
              <p>
                Simple Image Filter 提供多种滤镜效果，您可以在侧边栏中找到这些滤镜：
              </p>
              <ul>
                <li>
                  <strong>暖色滤镜</strong>：增强图像中的红色和黄色调，营造温暖、舒适的氛围
                </li>
                <li>
                  <strong>冷色滤镜</strong>：增强图像中的蓝色和青色调，营造清凉、冷静的氛围
                </li>
                <li>
                  <strong>灰度滤镜</strong>：将彩色图像转换为黑白图像，突出照片的形状、纹理和对比度
                </li>
                <li>
                  <strong>反色滤镜</strong>：将图像颜色反转，创造出独特的视觉效果
                </li>
                <li>
                  <strong>老照片滤镜</strong>：模拟老照片的效果，添加复古色调和纹理
                </li>
              </ul>
              <p>
                应用滤镜后，您可以使用"撤销"按钮恢复原始图像，或者尝试不同的滤镜效果。
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">常见问题解答</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>软件支持哪些图像格式？</Accordion.Header>
              <Accordion.Body>
                Simple Image Filter 支持大多数常见的图像格式，包括 JPG、PNG、BMP、GIF 等。
                这些格式都可以被软件正确打开和编辑。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>如何撤销操作？</Accordion.Header>
              <Accordion.Body>
                您可以使用工具栏中的"撤销"按钮或快捷键 Ctrl+Z 来撤销最近的操作。
                软件支持多级撤销，您可以连续撤销多个操作。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>软件是否支持批量处理？</Accordion.Header>
              <Accordion.Body>
                当前版本的 Simple Image Filter 主要针对单张图像处理，不支持批量处理功能。
                我们计划在未来版本中添加这一功能。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>如何报告问题或提出建议？</Accordion.Header>
              <Accordion.Body>
                如果您遇到问题或有改进建议，可以通过以下方式联系我们：
                <ul>
                  <li>在 <a href="https://github.com/dependon/simple-image-filter/issues" target="_blank">GitHub Issues</a> 页面提交问题</li>
                  <li>发送邮件至：liuminghang0821@gmail.com</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default DocsPage;
