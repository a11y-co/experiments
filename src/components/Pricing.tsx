import React from "react";
import ReactTooltip from "react-tooltip";

function Pricing() {
  return (
    <div>
      <ReactTooltip />
      <div className="pricing-table">
        <div>1</div>
        <div>
          <h2>Indie</h2>
          <div>
            <div>
              <div className="price">
                <span>$</span>49
              </div>
              <div className="time">per month</div>
            </div>
          </div>
          <div className="save">Save $120 annually</div>
        </div>
        <div>
          <h2>Startup</h2>
          <div>
            <div>
              <div className="price">
                <span>$</span>129
              </div>
              <div className="time">per month</div>
            </div>
          </div>
          <div className="save">Save $120 annually</div>
        </div>
        <div>
          <h2>Growth</h2>
          <div>
            <div>
              <div className="price">
                <span>$</span>329
              </div>
              <div className="time">per month</div>
            </div>
          </div>
          <div className="save">Save $120 annually</div>
        </div>
        <div>
          <h2>Enterprise</h2>
          <div>
            <div>
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
        <div>✓</div>
        <div>✓</div>
        <div>✓</div>
      </div>
      <div className="pricing-table i">
        <div>Accessibility plugin</div>
        <div></div>
        <div></div>
        <div>✓</div>
        <div>✓</div>
      </div>
      <div className="pricing-table i">
        <div>Dedicated support</div>
        <div></div>
        <div></div>
        <div>✓</div>
        <div>✓</div>
      </div>
      <div className="pricing-table i">
        <div>SSO</div>
        <div></div>
        <div></div>
        <div></div>
        <div>✓</div>
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
}

export default Pricing;
