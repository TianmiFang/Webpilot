import css from 'styled-jsx/css'
import Avatar from 'data-base64:~assets/images/avatar/avatar.svg'

export default function Engineer(props) {
  return (
    <section className="engineer">
      <img src={Avatar} alt="" />
      <a className="name" href={props.info.page} target="_blank" rel="noreferrer">
        {props.info.name}
      </a>
      <span className="title">{props.info.title}</span>
      <style jsx>{styles}</style>
    </section>
  )
}

const styles = css`
  .engineer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 155px;
    height: 143px;
    margin-right: 16px;
    padding: 16px;
    background-color: #ffffff;
    box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
    border-radius: 20px;
    @media screen and (max-width: 800px) {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }

    img {
      width: 48px;
      height: 48px;
      margin-right: 16px;
    }

    .name {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  }
`
