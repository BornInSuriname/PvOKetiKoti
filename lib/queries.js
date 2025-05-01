export const GET_TIMELINE_ITEMS = `
  query GetTimelineItems {
    timelineItems {
      nodes {
        title
        content
        date
      }
    }
  }
`

export const GET_HERDENKINGEN = `
  query {
    herdenkingen {
      nodes {
        title
        content
      }
    }
  }
`

export const GET_EDUCATIES = `
  query {
    educaties {
      nodes {
        title
        content
      }
    }
  }
`
