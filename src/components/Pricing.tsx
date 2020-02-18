import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faCheck } from "@fortawesome/free-solid-svg-icons";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const Pricing = () => {
  const [annualPricing, setAnnualPricing] = useState(false);
  return (
    <div>
      <ReactTooltip />
      <div className="pricing-table">
        <div className="annual">
          <Toggle
            id="annual"
            icons={false}
            defaultChecked={annualPricing}
            onChange={event => setAnnualPricing(event.target.checked)}
          />
          <label htmlFor="annual">Pay annually</label>
        </div>
        <div>
          <h2>Indie</h2>
          <div>
            <div>
              <div className="price">
                <span>$</span>
                {annualPricing ? 39 : 49}
              </div>
              <div className="time">per month</div>
            </div>
          </div>
          <div className="save">
            {annualPricing ? "Saving" : "Save"} $120 annually
          </div>
        </div>
        <div>
          <h2>Startup</h2>
          <div>
            <div>
              <div className="price">
                <span>$</span>
                {annualPricing ? 99 : 129}
              </div>
              <div className="time">per month</div>
            </div>
          </div>
          <div className="save">
            {annualPricing ? "Saving" : "Save"} $240 annually
          </div>
        </div>
        <div>
          <h2>Growth</h2>
          <div>
            <div>
              <div className="price">
                <span>$</span>
                {annualPricing ? 259 : 329}
              </div>
              <div className="time">per month</div>
            </div>
          </div>
          <div className="save">
            {annualPricing ? "Saving" : "Save"} $840 annually
          </div>
        </div>
        <div>
          <h2>Enterprise</h2>
          <div>
            <div>
              <FontAwesomeIcon className="icon" icon={faComments} />
              <div className="time">custom pricing</div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-table i">
        <div>Scanned pages</div>
        <div>10</div>
        <div>25</div>
        <div>100</div>
        <div>Custom</div>
      </div>
      <div className="pricing-table i">
        <div>
          Automated audits
          <span
            className="q"
            data-tip="We'll scan your webpages every so often automatically"
          />
        </div>
        <div>Weekly</div>
        <div>Daily</div>
        <div>Hourly</div>
        <div>Custom</div>
      </div>
      <div className="pricing-table i">
        <div>
          Expert audits
          <span
            className="q"
            data-tip="Our team of expert consultants will manually audit your site"
          />
        </div>
        <div></div>
        <div></div>
        <div>1 per month</div>
        <div>Custom</div>
      </div>
      <div className="pricing-table i">
        <div>API</div>
        <div></div>
        <div>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div>
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>
      <div className="pricing-table i">
        <div>Accessibility plugin</div>
        <div></div>
        <div></div>
        <div>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div>
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>
      <div className="pricing-table i">
        <div>Dedicated support</div>
        <div></div>
        <div></div>
        <div>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div>
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>
      <div className="pricing-table i">
        <div>Single Sign On</div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>
      <div className="pricing-table b">
        <div></div>
        <div>
          <a href="#">Start for free</a>
        </div>
        <div>
          <a href="#">Start for free &rarr;</a>
        </div>
        <div>
          <a href="#">Start for free</a>
        </div>
        <div>
          <a href="#">Get in touch</a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
