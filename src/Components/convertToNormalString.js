import _ from "lodash";

const htmlsToReplace = {
  "&quot;": `"`,
  "&amp;": "&",
  "&shy;": "-",
  "&eacute;": "é",
  "&Uuml;": "Ü",
  "&uuml;": `ü`,
  "&ldquo;": "‘",
  "&rsquo;": "’",
  "&#039;": "'",
  "&euml;": `ë`,
  "&rdquo;": `”`,
  "&Iacute;": `Í`,
  "&aacute;": `á`,
  "&Aacute;": `Á`,
  "&ntilde;": `ñ`,
  "&pi;": `π`,
  "&ouml": `ö`,
  "&Ouml": `Ö`,
  "&iacute": `í`,
  "&deg;": `°`,
  "&lrm;": ` `,
};

const removeHTMLCharacters = (string) => {
  let modifiedString = string;
  for (let [html, replacementString] of Object.entries(htmlsToReplace)) {
    modifiedString = _.replace(
      modifiedString,
      new RegExp(html, "g"),
      replacementString
    );
  }
  return modifiedString;
};

export const convertToNormalString = (string) => {
  return removeHTMLCharacters(
    string &&
      string.replace(/&#(?:x([\da-f]+)|(\d+));/gi, function (_, hex, dec) {
        return String.fromCharCode(dec || +("0x" + hex));
      })
  );
};
