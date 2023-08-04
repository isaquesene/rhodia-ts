import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {

    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "")

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