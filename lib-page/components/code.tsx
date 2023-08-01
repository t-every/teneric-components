import clsx from 'clsx';
import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from 'prism-react-renderer';

const theme: PrismTheme = {
  plain: {
    backgroundColor: '#003825',
    color: '#b1f2f0',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
      style: {
        color: '#9e9e9e',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['tag', 'operator', 'number', 'module'],
      style: {
        color: '#00fff7',
      },
    },
    {
      types: ['property', 'function'],
      style: {
        color: '#45f5ef',
      },
    },
    {
      types: ['tag-id', 'selector', 'atrule-id'],
      style: {
        color: '#eeebff',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: '#ff007b',
      },
    },
    {
      types: [
        'boolean',
        'string',
        'entity',
        'url',
        'attr-value',
        'keyword',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'at-rule',
        'placeholder',
        'variable',
      ],
      style: {
        color: '#ffffff',
      },
    },
    {
      types: ['deleted'],
      style: {
        textDecorationLine: 'line-through',
      },
    },
    {
      types: ['inserted'],
      style: {
        textDecorationLine: 'underline',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['important'],
      style: {
        color: '#7ff0ec',
      },
    },
  ],
};

export const Code: React.FC<{
  snippet: string;
  language?: Language;
  className?: string;
}> = (props) => {
  const language = props.language || 'jsx';

  return (
    <Highlight
      {...defaultProps}
      code={props.snippet}
      theme={theme}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={clsx(
            props.className,
            className,
            'h-full w-full rounded-lg p-4 overflow-x-auto flex flex-col items justify-center'
          )}
          style={style}
        >
          {tokens.map((line, i) => {
            if (tokens.length - 1 === i && line[0].empty) {
              return null;
            }

            return (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};
