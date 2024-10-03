export default function Positions() {
  return (
    <div>
      <h2>Relative</h2>
      <div className="wd-bg-color-gray">
        <div className="wd-bg-color-yellow wd-dimension-portrait">
          <div className="wd-pos-relative-nudge-down-right">Portrait</div>
        </div>
        <div
          className="wd-pos-relative-nudge-up-right wd-bg-color-blue 
            wd-fg-color-white wd-dimension-landscape"
        >
          Landscape
        </div>
        <div className="wd-bg-color-red wd-dimension-square">Square</div>
      </div>

      <h2>Absolute position</h2>
      <div className="wd-pos-relative">
        <div
          className="wd-pos-absolute-10-10 wd-bg-color-yellow 
            wd-dimension-portrait"
        >
          Portrait
        </div>
        <div
          className="wd-pos-absolute-50-50 wd-bg-color-blue 
            wd-fg-color-white wd-dimension-landscape"
        >
          Landscape
        </div>
        <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
          Square
        </div>
      </div>
      <br />
      <h2>Fixed position</h2>
      <div
        className="wd-pos-fixed wd-dimension-square wd-bg-color-blue 
          wd-fg-color-white"
      >
        Fixed position
      </div>
    </div>
  );
}
