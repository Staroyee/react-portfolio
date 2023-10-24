import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;

function Nav() {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo">
          <img src="https://example.com/your-avatar-image.jpg" alt="Avatar" />
        </div>
        <h2 style={{ margin: 0, marginLeft: 16 }}>Daniel Masefield</h2>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">About Me</Menu.Item>
        <Menu.Item key="2">Portfolio</Menu.Item>
        <Menu.Item key="3">Resume</Menu.Item>
        <Menu.Item key="4">Contact</Menu.Item>
      </Menu>
    </Header>
  );
}



// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <>
//       <nav className="bg-secondary">
//         <ul>
//           <li>
//             <Link to="/">About Me</Link>
//           </li>
//           <li>
//             <Link to="/portfolio">Portfolio</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li>
//             <Link to="/resume">Resume</Link>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }

export default Nav;
