// @flow

import * as React from 'react';
import {LAYOUT_GRID_CONSTANTS} from '../constants';

const {ALIGNMENT, BEHAVIOR} = LAYOUT_GRID_CONSTANTS;

export type ResponsiveT<T> = T | Array<T>;

export type AlignmentT =
  | typeof ALIGNMENT.start
  | typeof ALIGNMENT.center
  | typeof ALIGNMENT.end;

export type BehaviorT = typeof BEHAVIOR.fixed | typeof BEHAVIOR.fluid;
export type CSSLengthUnitT =
  | 'cm'
  | 'mm'
  | 'Q'
  | 'in'
  | 'pc'
  | 'px'
  | 'pt'
  | 'em'
  | 'ex'
  | 'ch'
  | 'rem'
  | 'lh'
  | 'vw'
  | 'vh'
  | 'vmin'
  | 'vmax'
  | '%';

export type GridPropsT = {
  /** Control vertical alignment of cells at each breakpoint. */
  align?: ResponsiveT<AlignmentT>,
  /** Grid container behavior beyond max width. Fluid will continue to expand. Fixed will limit grid container to max width and center the container horizontally within parent element. */
  behavior?: BehaviorT,
  /** Children should be Cells. */
  children: React.ChildrenArray<React.Element>,
  /** Number of columns at each breakpoint. */
  gridColumns?: ResponsiveT<number>,
  /** Gap between rows at each breakpoint. */
  gridGaps?: ResponsiveT<number>,
  /** Gap between columns at each breakpoint. */
  gridGutters?: ResponsiveT<number>,
  /** Gap on either side of grid container at each breakpoint. */
  gridMargins?: ResponsiveT<number>,
  /** Maximum width of the grid container. Does not include Margins. Only applies when `behavior` is `fluid`. */
  gridMaxWidth?: number,
  /** Modify the CSS length unit used to measure columns and rows. Defaults to theme value. */
  gridUnit?: CSSLengthUnitT,
};

export type StyledGridPropsT = {
  /** Control vertical alignment of cells at each breakpoint. */
  $align?: ResponsiveT<AlignmentT>,
  /** Grid container behavior beyond max width. Fluid will continue to expand. Fixed will limit grid container to max width and center the container horizontally within parent element. */
  $behavior?: BehaviorT,
  /** Gap between columns at each breakpoint. */
  $gridGutters?: ResponsiveT<number>,
  /** Gap on either side of grid container at each breakpoint. */
  $gridMargins?: ResponsiveT<number>,
  /** Maximum width of the grid container. Does not include Margins. Only applies when `behavior` is `fluid`. */
  $gridMaxWidth?: number,
  /** Modify the CSS length unit used to measure columns and rows. Defaults to theme value. */
  $gridUnit?: CSSLengthUnitT,
};

export type CellPropsT = {
  /** Control vertical alignment of individual cell at each breakpoint. Limited proxy for `align-self` CSS property. */
  align?: ResponsiveT<AlignmentT>,
  /** Content to be placed in Cell. */
  children?: React.Node,
  /** Control placement order of cell in flex row at each breakpoint. Proxy for `order` CSS property. */
  order?: ResponsiveT<number>,
  /** Control number of columns to offset cell at each breakpoint. */
  skip?: ResponsiveT<number>,
  /** Control number of columns the cell should span. */
  span?: ResponsiveT<number>,
};

export type StyledCellPropsT = {
  /** Control vertical alignment of individual cell at each breakpoint. Limited proxy for `align-self` CSS property. */
  $align?: ResponsiveT<AlignmentT>,
  /** Number of columns at each breakpoint. */
  $gridColumns?: ResponsiveT<number>,
  /** Gap between rows at each breakpoint. */
  $gridGaps?: ResponsiveT<number>,
  /** Gap between columns at each breakpoint. */
  $gridGutters?: ResponsiveT<number>,
  /** Control placement order of cell in flex row at each breakpoint. Proxy for `order` CSS property. */
  $order?: ResponsiveT<number>,
  /** Control number of columns to offset cell at each breakpoint. */
  $skip?: ResponsiveT<number>,
  /** Control number of columns the cell should span. */
  $span?: ResponsiveT<number>,
  /** Modify the CSS length unit used to measure columns and rows. Defaults to theme value. */
  $gridUnit?: CSSLengthUnitT,
};
