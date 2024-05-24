
import "./UpperNavbar.css";

function UpperNavbar() {
  return (
    <div className="uper-navbar w-100 first-primary d-flex justify-content-between">
      <div className="menu-links navbar-font">
        <ul className="d-flex ms-4">
          <li>Become a Seller</li>
          <li>Daraz Affiliate Program</li>
          <li>Help & Support</li>
          <li>Daraz Logistics Partner</li>
        </ul>
      </div>
      <div className="">
        <div
          class="top-links-item orange save-more d-flex"
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
