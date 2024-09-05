let Header = () => {
    return <header className='mb-auto'>
        <div>
            <h3 className='float-md-start mb-0'>renfei.net</h3>
            <nav className='nav nav-masthead justify-content-center float-md-end'>
                <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">首页</a>
                <a className="nav-link fw-bold py-1 px-0" href="https://github.com/renfei" target="_blank"
                   rel="nofollow noopener noreferrer">GitHub</a>
            </nav>
        </div>
    </header>;
}

let Main = () => {
    return <main>
        <h1>个人开发测试站</h1>
        <p className="lead">本站是任霏的个人网站，主要用于个人对软件、互联网的开发、学习、测试、笔记记录的功能，
            内容包括：Server/Web/Java/React/Vue/JavaScript等软硬件IT类技术内容。</p>
        <p className="lead" style={{fontSize: '12px'}}>为表合法合规作出以上说明，本人尊重任何人的权利，如果有侵犯到您的权利，
            如版权投诉，请联系我，我会立即删除</p>
        <p className="lead" style={{fontSize: '12px'}}>致 MJJ
            们：本站不参与任何压测活动，请勿刷量、CC、DDoS；如果你也是技术爱好者请友好交流。</p>
        <p className="lead">
            <a href="mailto:i@renfei.net"
               className="btn btn-lg btn-light fw-bold border-white bg-white">邮件：i@renfei.net</a>
        </p>
    </main>
        ;
}

let Footer = () => {
    return <footer className='mt-auto text-white-50'>
        <p style={{fontSize: '12px'}}>Copyright &copy; 2024 RenFei All rights reserved. <a
            href="https://beian.miit.gov.cn"
            className="text-white-50" target="_blank" rel="nofollow noopener noreferrer">京ICP备00000000号-1</a> <a
            href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010000000000"
            className="text-white-50" target="_blank" rel="nofollow noopener noreferrer">京公网安备11010000000000号</a>
        </p>
    </footer>;
}

let App = () => {
    return <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
        <Header/>
        <Main/>
        <Footer/>
    </div>;
}

let SayHi = () => {
    let txt = `%c巴山楚水凄凉地，踏码的沙壁ICP
既然阁下能进入此处，我甚感欣慰
为了ICP备案合规，我只能自废首页
因为个人的备案几乎什么也不让做
天天让我整改，不胜其扰出此下策
我来介绍一下真正的网站服务吧：
https://blog.renfei.net
https://maven.renfei.net
https://ip.renfei.net
`;
    console.log(txt, 'background: #222; color: #bada55');
}

SayHi();

ReactDOM.createRoot(document.getElementById('app')).render(<App tab="home"/>);
