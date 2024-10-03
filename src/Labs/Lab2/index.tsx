import "./index.css";
export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>

      {/* Styling with ID selectors */}
      <h3>Styling with ID selectors</h3>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID.
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and
          feel.
        </p>
      </div>

      {/* Styling with class selectors */}
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element's
          CLASS attribute.
        </p>
        <h4 className="wd-class-selector">
          This heading has the same style as the paragraph above.
        </h4>
      </div>

      {/* Document structure selectors */}
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document.
            <p className="wd-selector-3">
              This paragraph's red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent.
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure.
            </p>
          </div>
        </div>
      </div>

      {/* Foreground colors */}
      <div id="wd-css-colors">
        <h2>Colors</h2>
        <h3 className="wd-fg-color-blue">Foreground color</h3>
        <p className="wd-fg-color-red">
          The text in this paragraph is red but{" "}
          <span className="wd-fg-color-green">this text is green</span>.
        </p>
      </div>

      {/* Background colors */}
      <div id="wd-css-background-colors">
        <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
        <p className="wd-bg-color-red wd-fg-color-black">
          This background of this paragraph is red but{" "}
          <span className="wd-bg-color-green wd-fg-color-white">
            the background of this text is green and the foreground white
          </span>
        </p>
      </div>

      {/* Border styles */}
      <div id="wd-css-borders">
        <h2>Borders</h2>
        <p className="wd-border-fat wd-border-red wd-border-solid">
          Solid fat red border
        </p>
        <p className="wd-border-thin wd-border-blue wd-border-dashed">
          Dashed thin blue border
        </p>
      </div>

      {/* Padding styles */}
      <div id="wd-css-paddings">
        <h2>Padding</h2>
        <div
          className="wd-padded-top-left wd-border-fat 
          wd-border-red wd-border-solid wd-bg-color-yellow"
        >
          Padded top left
        </div>

        <div
          className="wd-padded-bottom-right wd-border-fat 
          wd-border-blue wd-border-solid wd-bg-color-yellow"
        >
          Padded bottom right
        </div>

        <div
          className="wd-padding-fat wd-border-fat 
          wd-border-yellow wd-border-solid wd-bg-color-blue 
          wd-fg-color-white"
        >
          Padded all around
        </div>
      </div>

      {/* Margin styles */}
      <div id="wd-css-margins">
        <h2>Margins</h2>
        <div
          className="wd-margin-bottom wd-padded-top-left wd-border-fat 
          wd-border-red wd-border-solid wd-bg-color-yellow"
        >
          Margin bottom
        </div>

        <div
          className="wd-margin-right-left wd-padded-bottom-right 
          wd-border-fat wd-border-blue wd-border-solid 
          wd-bg-color-yellow"
        >
          Margin left right
        </div>

        <div
          className="wd-margin-all-around wd-padding-fat 
          wd-border-fat wd-border-yellow wd-border-solid 
          wd-bg-color-blue wd-fg-color-white"
        >
          Margin all around
        </div>
      </div>
    </div>
  );
}
