import React from 'react';
import classNames from 'classnames';

import SectionPageNoSearch from '../page-components/section-page-no-search';
import ShowMorePageTitle from '../show-more-page-title';

const ShowMorePageItem = (props) => {
  const {
    className,
    showMorePageTitle,
    children,
    ...restProps
  } = props;

  return (
    <SectionPageNoSearch {...restProps}>
      <ShowMorePageTitle
        showMorePageTitle={showMorePageTitle}
        {...restProps}
      />
      {children}
    </SectionPageNoSearch>
  )
}

export default ShowMorePageItem;