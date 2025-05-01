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