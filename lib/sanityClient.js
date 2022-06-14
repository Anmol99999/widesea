import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'wm42zl2c',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sklwXAfyXfbKBI7CefArWuFsLGRZvInJ9L8aMH6GTvgAnrB3GaVDnsYIBfZffiVUJLX4BUvUvfQYjRQdHbvXvw4yKLJHwDU4TSx04fvG0cILqxdZ6P4stcUSIVLfOsvTF47r3Zi0Ue7CP3Ui0rZsRPflJow4pUAbAtarelie2sjknGVwJ4IB',
  useCdn: false,
})

