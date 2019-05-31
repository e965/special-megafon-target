import { toArray } from './array'

/**
 * Make html element
 * @param {String} tagName
 * @param {Array|String} classNames - array of classnames or string for single classname
 * @param {Object} attributes - object with html attributes
 */
export const createElement = (tagName, classNames = [], attributes = []) => {
    tagName = tagName.toLowerCase();

    let element = document.createElement(tagName);

    if (classNames) {
        if (typeof classNames === 'object') {
            classNames.forEach(cname => {
                element.classList.add(cname);
            });
        } else if (typeof classNames === 'string') {
            element.classList.add(classNames);
        }
    }

    for (let attr in attributes) {
        switch (attr) {
          case 'data':
            let dataAttributes = attributes[attr]

            for (let attr in dataAttributes) {
                element.dataset[attr] = dataAttributes[attr]
            }

            break

          case 'style':
            let styleAttributes = attributes[attr]

            for (let attr in styleAttributes) {
                element.style[attr] = styleAttributes[attr]
            }

            break

          default:
            element[attr] = attributes[attr]
        }
    }

    return element;
};

/**
 * Cache elements with [data-view] attribute and put them in given object
 * @param {Object} obj - object
 */
export const cacheElements = (obj, attr = 'view') => {
    let newObj = {}

    let elements = document.querySelectorAll(`[data-${attr}]`);

    Array.prototype.forEach.call(elements, el => {
        let name = el.dataset[attr];
        newObj[name] = el;
    });

    Object.assign(obj, newObj);
};

/**
 * Get all siblings of specified element, excluding this element
 * @param {Element} element
 */
export const getSiblings = (element) => {
    let siblings = []

    let sibling = element.parentNode.firstChild;

    for (; sibling; sibling = sibling.nextSibling) {
        if (sibling.nodeType !== 1 || sibling === element) continue;
        siblings.push(sibling);
    }

    return siblings;
};

/**
 * Remove all children from element
 * @param {Element} parent
 */
export const clearNode = (node, exceptions = []) => {
    if (node.hasChildNodes()) {
      toArray(node.childNodes).forEach(node_ => {
        let trigger = false

        exceptions.forEach(exception => {
          if (node_.classList.contains(exception)) {
            trigger = true
          }
        })

        if (!trigger) { node.removeChild(node_) }
      })
    }
};

/**
 * Remove specified element from its parent
 * @param {Element} element
 */
export const removeElement = (element) => {
    if (element) {
        element.parentNode.removeChild(element);
    }
};

/**
 * Transform html string to node
 * @param {String} html
 */
export const htmlStringToNode = (html) => {
    let el = document.createElement('div');

    el.innerHTML = html;

    return el.firstChild;
};

/**
 * Prepend source element before first child of target element
 * @param {Element} parent
 * @param {Element} el
 */
export const prepend = (parent, el) => {
    parent.insertBefore(el, parent.firstChild);
};

/** Quick check if element is in DOM */
export const isElementInDom = (el) => {
    return el.parentNode;
};
