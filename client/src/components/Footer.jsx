import React from "react";
import { assets } from "../assets/assets";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="footer sm:footer-horizontal p-10 mx-auto max-w-[1700px] z-50 sm:px-8 md:px-10 lg:px-20 xl:px-32">
        {" "}
        <nav>
          <img
            src={
              document.documentElement.dataset.theme === "dark"
                ? assets.logo
                : assets.logo_dark
            }
            alt="QuickStay Logo"
          />
          <p className="max-w-md mt-4">
            Discover the world&apos;s most extraordinary places to stay, from
            boutique hotels to luxury villas and private islands.
          </p>
          <div className="flex space-x-4 mt-4">
            <img src={assets.facebookIcon} alt="facebook Logo" />
            <img src={assets.instagramIcon} alt="instagram Logo" />
            <img src={assets.twitterIcon} alt="twitter Logo" />
            <img src={assets.linkedinIcon} alt="linkedin Logo" />
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Partners</a>
        </nav>
        <nav>
          <h6 className="footer-title">SUPPORT</h6>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Safety Information</a>
          <a className="link link-hover">Cancellation Options</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <form>
          <h6 className="footer-title">STAY UPDATED</h6>
          <fieldset className="w-80">
            <div className="mb-4">
              Subscribe to our newsletter for travel inspiration and special
              offers.
            </div>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="w-full">
        <hr className="mx-auto w-78/100 border border-gray-300" />
        <p className="text-center text-sm py-5 text-gray-600">
          © {year} QuickStay. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
