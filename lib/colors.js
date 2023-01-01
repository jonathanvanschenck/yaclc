
/**
 * Convert hex string to foreground color code
 *
 * @private
 * @param {string} hex - The hex string to convert
 * @returns {string} The RGB terminal color code
 */
function hex_to_fg_code(hex) {
    const [r,g,b] = hex.match(/[a-fA-F0-9]{2}/g)?.map( x => parseInt(x,16) ) || [255,255,255];
    return `\x1b[38;2;${r};${g};${b}m`;
}

/**
 * Convert hex string to background color code
 *
 * @private
 * @param {string} hex - The hex string to convert
 * @returns {string} The RGB terminal color code
 */
function hex_to_bg_code(hex) {
    const [r,g,b] = hex.match(/[a-fA-F0-9]{2}/g)?.map( x => parseInt(x,16) ) || [255,255,255];
    return `\x1b[48;2;${r};${g};${b}m`;
}

// Linux console colors, see https://chrisyeh96.github.io/2020/03/28/terminal-colors.html
/* eslint-disable no-irregular-whitespace */
/**
 * The built-in terminal text colors available for use
 *
 * @constant
 * @type {object}
 * @default
 */
const COLORS = {
    black :"\x1b[30m",
    red : "\x1b[31m",
    green : "\x1b[32m",
    yellow : "\x1b[33m",
    blue : "\x1b[34m",
    magenta : "\x1b[35m",
    cyan : "\x1b[36m",
    white : "\x1b[37m",
    default : "",
};

/**
 * The built-in terminal background colors available for use
 *
 * @constant
 * @type {object}
 * @default
 */
const BACKGROUND_COLORS = {
    black :"\x1b[40m",
    red : "\x1b[41m",
    green : "\x1b[42m",
    yellow : "\x1b[43m",
    blue : "\x1b[44m",
    magenta : "\x1b[45m",
    cyan : "\x1b[46m",
    white : "\x1b[47m",
    default : "",
};
/* eslint-enable no-irregular-whitespace */

/**
 * Format a string with colors and font
 *
 * @param {string} string - The string to format
 * @param {object} [options={}]
 * @param {string} [options.color=default] - The text color to use, name (e.g. 'red') or hex (e.g. '#ff0000')
 * @param {string} [options.bg_color=default] - The background color to use, name (e.g. 'red') or hex (e.g. '#ff0000')
 * @param {boolean} [options.bold=false] - Whether to use bold font
 * @param {boolean} [options.faint=false] - Whether to use faint font
 * @param {boolean} [options.underlined=false] - Whether to use underlined font
 * @param {boolean} [options.blink=false] - Whether to use blinking font
 * @returns {string} The formatted string
 */
function f(string, { color="default", bg_color="default", bold=false, faint=false, underlined=false, blink=false }={}) {
    let prefix = "";

    if ( color.startsWith("#") ) {
        prefix += hex_to_fg_code(color);
    } else {
        prefix += COLORS[color] || COLORS["default"];
    }

    if ( bg_color.startsWith("#") ) {
        prefix += hex_to_bg_code(bg_color);
    } else {
        prefix += BACKGROUND_COLORS[bg_color] || BACKGROUND_COLORS["default"];
    }

    if ( bold ) prefix += "\x1b[1m";
    if ( faint ) prefix += "\x1b[2m";
    if ( underlined ) prefix += "\x1b[4m";
    if ( blink ) prefix += "\x1b[5m";

    return prefix + string +"\x1b[0m";
}

module.exports = exports = {
    COLORS : COLORS,
    BACKGROUND_COLORS : BACKGROUND_COLORS,
    f : f
};
