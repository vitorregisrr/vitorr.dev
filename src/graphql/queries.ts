import { gql } from 'graphql-request'

export const GET_SIDEBAR_CONTENT = gql`
  query getContent($locale: Locale!) {
    sidebar(
      where: { id: "cl5lmb4imktgx0bitw9ygghcj" }
      locales: [$locale, en]
    ) {
      skills_label
      portfolio_label
      home_label
      experiences_label
      contact_label
    }
  }
`

export const GET_HOME_CONTENT = gql`
  query getContent($locale: Locale!) {
    home(where: { id: "cl5ll4l9aspzh0dkcpab5tjdb" }, locales: [$locale, en]) {
      title
      description
      menu_title
      light_profile_image {
        url
      }
      dark_profile_image {
        url
      }
      link_1_label
      link_2_label
      link_3_label
      link_4_label
    }
  }
`

export const GET_PAST_CONTENT = gql`
  query getContent($locale: Locale!) {
    pastExperience(
      where: { id: "cl55vrql9uxcn0dk93vckje5z" }
      locales: [$locale]
    ) {
      title
      description
      experiences {
        description
        ocuppation
        title
      }
    }
  }
`

export const GET_PORTFOLIO_CONTENT = gql`
  query getContent($locale: Locale!) {
    portfolio(
      where: { id: "cl5lqijtjmgzj0djx5r8ftvoa" }
      locales: [$locale, en]
    ) {
      title
      description
      items {
        link
        title
        technologies
        categories
        image {
          url
        }
      }
    }
  }
`

export const GET_SKILLS_CONTENT = gql`
  query getContent($locale: Locale!) {
    skills(where: { id: "cl5lqo9e2mvo00bk8x45o10hz" }, locales: [$locale, en]) {
      title
      subtitle
      rightText {
        html
      }
      leftText {
        html
      }
      description
      badge_title
    }
  }
`

export const GET_CONTACT_CONTENT = gql`
  query getContent($locale: Locale!) {
    contact(
      where: { id: "cl5llvj2lkob20bitd30iikf3" }
      locales: [$locale, en]
    ) {
      title
      subtitle
      linkedinInfo {
        label
        link
      }
      whatsapp_info {
        label
        link
      }
      githubInfo {
        link
        label
      }
      emailInfo {
        label
        link
      }
    }
  }
`
