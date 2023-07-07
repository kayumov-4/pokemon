"use strict";
const wrapper1 = document.getElementById("wrapper");
const type = document.getElementById("type");
const search = document.getElementById("search-input");
const sort_div = document.getElementById("sort_select");
// ----------------------------Rendering--------------------------------

function render(arr) {
  let res = "";
  arr.map((value) => {
    res += `
        
          <div class="card w-[307px] h-[427px] bg-white rounded-2xl border-2 border-black ">
              <img src="${
                value.img
              }" alt="" class="pt-[30px] pl-[75px] mb-[90px]">
              <div class="line border-t-2 border-black"></div>
              <div class="text flex mt-[20px] justify-between mb-[25px] px-[30px]">
                  <div class="">
                    <h2 class="text-2xl font-bold">${value.name}</h2>
                    <p class="text-xl font-medium">${value.type}</p>
                  </div>
                <svg  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icon/Outline/heart">
                    <path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M9.02463 7.5C7.94463 7.5 6.93213 7.9175 6.17463 8.67625C4.60213 10.2512 4.60213 12.815 6.17588 14.3925L14.9996 23.2313L23.8246 14.3925C25.3984 12.815 25.3984 10.2512 23.8246 8.67625C22.3096 7.1575 19.6396 7.16 18.1246 8.67625L15.8846 10.92C15.4146 11.3913 14.5846 11.3913 14.1146 10.92L11.8746 8.675C11.1171 7.9175 10.1059 7.5 9.02463 7.5ZM14.9996 26.25C14.6684 26.25 14.3496 26.1187 14.1159 25.8825L4.40588 16.1575C1.86088 13.6075 1.86088 9.45875 4.40588 6.90875C5.63588 5.67875 7.27588 5 9.02463 5C10.7734 5 12.4146 5.67875 13.6434 6.90875L14.9996 8.2675L16.3559 6.91C17.5859 5.67875 19.2259 5 20.9759 5C22.7234 5 24.3646 5.67875 25.5934 6.90875C28.1396 9.45875 28.1396 13.6075 25.5946 16.1575L15.8846 25.8838C15.6496 26.1188 15.3321 26.25 14.9996 26.25Z" fill="#231F20"/>
                    <mask id="mask0_1_48" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="5" width="26" height="22">
                    <path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M9.02463 7.5C7.94463 7.5 6.93213 7.9175 6.17463 8.67625C4.60213 10.2512 4.60213 12.815 6.17588 14.3925L14.9996 23.2313L23.8246 14.3925C25.3984 12.815 25.3984 10.2512 23.8246 8.67625C22.3096 7.1575 19.6396 7.16 18.1246 8.67625L15.8846 10.92C15.4146 11.3913 14.5846 11.3913 14.1146 10.92L11.8746 8.675C11.1171 7.9175 10.1059 7.5 9.02463 7.5ZM14.9996 26.25C14.6684 26.25 14.3496 26.1187 14.1159 25.8825L4.40588 16.1575C1.86088 13.6075 1.86088 9.45875 4.40588 6.90875C5.63588 5.67875 7.27588 5 9.02463 5C10.7734 5 12.4146 5.67875 13.6434 6.90875L14.9996 8.2675L16.3559 6.91C17.5859 5.67875 19.2259 5 20.9759 5C22.7234 5 24.3646 5.67875 25.5934 6.90875C28.1396 9.45875 28.1396 13.6075 25.5946 16.1575L15.8846 25.8838C15.6496 26.1188 15.3321 26.25 14.9996 26.25Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_1_48)">
                    <g id="&#240;&#159;&#142;&#168; Color">
                    <rect id="Base" width="30" height="30" fill="black"/>
                    </g>
                    </g>
                    </g>
                </svg>
              </div>
              <div class="text-footer flex ml-[30px] gap-[30px]">
                <p class="text-2xl font-bold">${value.weight}</p>
                <p class="text-2xl font-bold">${
                  value.candy_count ? value.candy_count : 99
                } kg</p>
              </div>
          </div>

        `;
  });

  wrapper1.innerHTML = res;
}

render(pokemons);
// ------------------------------------------------------------------

// ----------------------------Adding Options--------------------------------

let types = [];

pokemons.map((el) => {
  el.type.forEach((elm) => {
    types.push(elm);
  });
});
const set = new Set(types);
const uniq = [...set];
console.log(uniq);

uniq.forEach((e) => {
  let a = document.createElement("option");
  a.textContent = e;
  type.append(a);
});
// ------------------------------------------------------------------

// ----------------------------Type Sorting--------------------------------

type.addEventListener("change", (e) => {
  wrapper1.innerHTML = "";
  let type_filter = pokemons.filter((elm) => {
    return (
      elm.type.toString().toLowerCase() ==
      e.target.value.toString().toLowerCase()
    );
  });
  console.log(type_filter);
  render(type_filter);
});
// ------------------------------------------------------------------

// ----------------------------Search--------------------------------
search.addEventListener("keyup", (e) => {
  wrapper1.innerHTML = "";
  let name_filter = pokemons.filter((el) => {
    return el.name.toLowerCase().includes(e.target.value.toLowerCase());
  });
  console.log(e.target.value);
  render(name_filter);
});
// ------------------------------------------------------------------

// ----------------------------Sorting--------------------------------

sort_div.addEventListener("change", (e) => {
  wrapper1.innerHTML = "";
  //   True Sort
  if (e.target.value.toLowerCase() == "A-Z".toLowerCase()) {
    const sorted = pokemons.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    render(sorted);
    //   Reverse Sort
  } else if (e.target.value.toLowerCase() == "Z-A".toLowerCase()) {
    const sorted = pokemons.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    render(sorted);
  }
});

// ------------------------------------------------------------------

render(pokemons);
