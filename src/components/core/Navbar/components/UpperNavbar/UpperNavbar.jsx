
import "./UpperNavbar.css";

function UpperNavbar() {
  return (
    <div className="uper-navbar d-none w-100 d-md-flex justify-content-between">
      <div className="menu-links navbar-font">
        <ul className="d-flex px-0">
          <li className="ms-0">Become a Seller</li>
          <li>Daraz Affiliate Program</li>
          <li>Help & Support</li>
          <li>Daraz Logistics Partner</li>
        </ul>
      </div>
      <div className="">
        <div
          class="top-links-item orange save-more d-flex align-items-center me-0"
          id="topActionDownload"
          data-spm-click="gostr=/lzdpub.header.tbar;locaid=d1"
        >
          <img
            src="//img.alicdn.com/imgextra/i1/O1CN01Ie2YnK1JmZ1mL3fY5_!!6000000001071-2-tps-60-60.png"
            alt=""
            class="save-more-icon"
          />{" "}
          <span>Save More on App</span>
        </div>
      </div>
    </div>
  );
}

export default UpperNavbar;
