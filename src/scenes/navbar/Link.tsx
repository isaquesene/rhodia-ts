import { SelectedPage } from '@/shared/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {

    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-501" : ""}
            transition duration-500 hover:text-primary-301
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link