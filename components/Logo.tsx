export default function Logo({ style }: { style?: React.CSSProperties }) {
  return (
    <span
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: '22px',
        fontWeight: 300,
        letterSpacing: '-0.02em',
        color: '#F5F6FA',
        ...style,
      }}
    >
      viable<span style={{ color: '#5CE0D8' }}>.</span>
    </span>
  )
}
