export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
      </div>
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1"> ... </p>
        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
        <div id="wd-lists">
          <h4>List Tags</h4>
          <h5>Ordered List Tag</h5>
          How to make pancakes: 1. Mix dry ingredients. 2. Add wet ingredients.
          3. Stir to combine. 4. Heat a skillet or griddle. 5. Pour batter onto
          the skillet. 6. Cook until bubbly on top. 7. Flip and cook the other
          side. 8. Serve and enjoy!
        </div>
      </div>
    </div>
  );
}
