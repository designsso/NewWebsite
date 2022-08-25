const plus = `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
  <g id="Group_88" data-name="Group 88" transform="translate(-1332 -3367)">
    <g id="Group_48" data-name="Group 48" transform="translate(354 237.5)">
      <rect id="Rectangle_28" data-name="Rectangle 28" width="8" height="37" rx="3" transform="translate(1015 3144) rotate(90)" fill="#fff"/>
      <rect id="Rectangle_29" data-name="Rectangle 29" width="8" height="37" rx="3" transform="translate(1000.5 3166.5) rotate(180)" fill="#fff"/>
    </g>
  </g>
</svg>`;

const minus = `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="8" viewBox="0 0 37 8">
<g id="Group_100" data-name="Group 100" transform="translate(-1332 -3147.5)">
  <g id="Group_42" data-name="Group 42" transform="translate(354 3.5)">
    <rect id="Rectangle_28" data-name="Rectangle 28" width="8" height="37" rx="3" transform="translate(1015 3144) rotate(90)" fill="#fff"/>
  </g>
</g>
</svg>`;

let boxes = {};

const moreinfo = (block) => {
    let info = document.querySelector(`#${block.id} .a`);
    let plus_minus = document.querySelector(`#${block.id} .icon`);

    if (boxes.hasOwnProperty(document.querySelector(`#${block.id}`)) == false) boxes[document.querySelector(`#${block.id} .icon`)] = false;

    if (boxes[block] == false) {
        info.style.display = "flex";
        plus_minus.innerHTML = minus;
        boxes[block] = true;
    }
    else {
        info.style.display = "none";
        plus_minus.innerHTML = plus;
        boxes[block] = false;
    }
}