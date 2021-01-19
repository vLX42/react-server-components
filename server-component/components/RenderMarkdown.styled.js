import Markdown from 'markdown-to-jsx'

const StyledMarkdown = ({ children }) => (
  <Markdown
    options={{
      overrides: {
        h1: {
          props: {
            className:
              'mb-8 text-2xl font-bold  lg:text-5xl',
          },
        },
        h2: {
          props: {
            className: 'mb-2 mb-4 text-xl font-bold  lg:text-2xl',
          },
        },

        p: {
          props: {
            className:
              'mb-8 text-base leading-relaxed text-center lg:text-left lg:text-xl',
          },
        },
        a: {
          props: {
            className: 'hover:text-gray-200 hover:underline',
          },
        },
      },
    }}
  >
    {children}
  </Markdown>
)

export default StyledMarkdown
