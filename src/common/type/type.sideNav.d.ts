/**
* @property {string} title - Menu title,
* @property {string} caption - Menu description,
* @property {string} icon - Menu Icon,
* @property {string} link - Path,
* @property {boolean} hidden - Menu hidden true or false,
* @property {Array<Depth>} expansion - Menu children Array,
*/
export interface Depth {
  /** Menu title */ title: string,
  /** Menu description */ caption?: string,
  /** Menu Icon */ icon?: string,
  /** Path */ link?: string,
  /** Menu hidden true or false */ hidden?: boolean
  /** Menu children Array */ expansion?: Array<Depth>
}

export interface Expansion extends Array<Depth>{}
