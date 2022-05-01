import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'wm42zl2c',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skDy2zjm2h79YqPNtW7GIQo9iRMzbepPt9RycR9H6VTIXBhPPVRdBEPM4DBkixbTgFIboSrOnEJT77Fw2wgRgdFmQL6IIjh3ouwIN7lGqDuuIMWNijwgKT1lU52fALjoR3xUrJjtklXu3ld4hlQtrOFIOR9GGniFF6aRUtUu5y5B0WKQWf0P',
  useCdn: false,
})