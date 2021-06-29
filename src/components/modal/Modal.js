import React from "react"
import heartImg from "../../images/ic-heart.png"
import wishlistBannerImg from "../../images/wishlist-banner.png"

const Modal = () => {
  return (
    <div>
      <div
        className="modal fade join-waitlist-modal modal-box-raw"
        id="join-waitlist"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label=" "
              />
              <img
                className="modal-banner img-fluid"
                src={wishlistBannerImg}
                alt=""
              />
              <div className="content-wrapper-raw section">
                <h3>Meet Cai at Craftly.ai</h3>
                <p>
                  Almost live - We have a lot of exciting new <br />
                  tools we’re perfecting for you.
                </p>
                <div className="request-access-raw section">
                  <div className="form-group">
                    <label htmlFor>Request Access</label>
                    <div className="prefinery-form-embed">
                      <iframe
                        title="modal email input"
                        src="https://i.prefinery.com/projects/g72qxl5b/users/new?display=inline&amp;version=2"
                        class="prefinery-iframe"
                        allowtransparency="true"
                        width="100%"
                        scrolling="no"
                        frameborder="0"
                        style={{ height: "0px" }}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade confirm-waitlist-modal modal-box-raw"
        id="confirm-waitlist"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label=" "
              />
              <h4>
                Craftly<span>.ai</span>
              </h4>
              <h3>Welcome!</h3>
              <p>
                We’ve added you on the waitlist and will let you <br />
                know when you can get started with Craftly
              </p>
              <div className="content-wrapper-raw section">
                <h5>Want to get access among the first?</h5>
                <p>
                  Use your unique link to spread the word - each new signup via
                  the link increases your placing on the list.
                </p>
                <div className="share-on-twitter-raw section">
                  <input type="text" placeholder="Craftly.ai/?ref" />
                  <button>
                    <i className="fa fa-twitter" /> Share on Twitter
                  </button>
                </div>
              </div>
              <p className="thanks-col">
                Thanks for your Support{" "}
                <img src={heartImg} className="img-fluid ic-heart" alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
