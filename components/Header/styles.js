import tw, { styled, css } from 'twin.macro'

const Header = styled.header`
  ${tw`sticky top-0 z-50 flex w-full h-10 px-5 py-10 mt-2 rounded dark:bg-gray-8 bg-gray-2`};
`

const TitleContainer = styled.div`
  ${tw`flex items-center w-1/2`};
`

const NavContainer = styled.div`
  ${tw`flex items-center justify-end w-1/2`};
`

const Nav = styled.nav``

const styles = {
  title: css`
    ${tw`text-xl font-light transition duration-150`};

    &:hover {
      ${tw`cursor-pointer dark:text-violet-3 text-green-5`};
    }
  `,

  navLink: ({ active }) => [
    tw`ml-6 font-light transition duration-150 cursor-pointer hover:text-green-5`,
    active && tw`cursor-default text-red-5 hover:text-red-5`,
  ],

  // navLink: css`
  //   ${tw`ml-6 font-light transition duration-150 cursor-pointer`};

  //   &:hover {
  //     ${tw`dark:text-violet-3 text-green-5`};
  //   }
  // `,

  activeNavLink: css`
    ${tw`cursor-default dark:text-red-5 text-red-5`};

    &:hover {
      ${tw`dark:text-red-5 text-red-5`};
    }
  `,
}

export { Header, TitleContainer, NavContainer, Nav, styles }
