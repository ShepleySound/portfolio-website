export default function MainLogo({
  color = '#000',
  width = 100,
  height = 100,
  ...props
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={500}
      viewBox='0 0 375 135'
      height={500}
      {...props}
    >
      <defs>
        <clipPath id='a'>
          <path d='M0 129.582h42V246H0Zm0 0' />
        </clipPath>
        <clipPath id='b'>
          <path d='M3 129.582h35.555a3 3 0 0 1 3 3v110.441a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V132.582a3 3 0 0 1 3-3' />
        </clipPath>
        <clipPath id='c'>
          <path d='M41.316 129.582H77V246H41.316Zm0 0' />
        </clipPath>
        <clipPath id='d'>
          <path d='M44.316 129.582h29.536a3 3 0 0 1 3 3v110.441a3 3 0 0 1-3 3H44.316a3 3 0 0 1-3-3V132.582a3 3 0 0 1 3-3' />
        </clipPath>
        <clipPath id='e'>
          <path d='M75 128h47v120H75Zm0 0' />
        </clipPath>
        <clipPath id='f'>
          <path d='m74.785 132.629 29.828-4.555 17.774 116.336-29.832 4.559Zm0 0' />
        </clipPath>
        <clipPath id='g'>
          <path d='m77.75 132.176 23.426-3.578a3 3 0 0 1 3.418 2.511l16.672 109.149a2.998 2.998 0 0 1-2.512 3.418l-23.426 3.578a3 3 0 0 1-3.418-2.512L75.238 135.594a3 3 0 0 1 2.512-3.418' />
        </clipPath>
      </defs>
      <g clipPath='url(#a)'>
        <g clipPath='url(#b)'>
          <path fill={color} d='M0 129.582h42.043v115.617H0Zm0 0' />
        </g>
      </g>
      <g clipPath='url(#c)'>
        <g clipPath='url(#d)'>
          <path fill={color} d='M41.316 129.582h36.11v115.55h-36.11Zm0 0' />
        </g>
      </g>
      <g clipPath='url(#e)'>
        <g clipPath='url(#f)'>
          <g clipPath='url(#g)'>
            <path
              fill={color}
              d='m74.785 132.629 29.828-4.555 17.543 114.848-29.828 4.555Zm0 0'
            />
          </g>
        </g>
      </g>
      <path
        d='M156.206 163.037h11.781v5.688h-18.969v-35.766h7.188Zm18.687-26.093c-1.262 0-2.313-.399-3.156-1.203-.836-.801-1.25-1.801-1.25-3 0-1.188.414-2.18 1.25-2.985.843-.812 1.894-1.218 3.156-1.218 1.27 0 2.32.406 3.156 1.218.832.805 1.25 1.797 1.25 2.985 0 1.199-.418 2.199-1.25 3-.836.804-1.887 1.203-3.156 1.203Zm3.547 3.39v28.391h-7.189v-28.39Zm12.961 4.157c.914-1.375 2.187-2.489 3.812-3.344 1.625-.852 3.477-1.281 5.563-1.281 2.426 0 4.617.601 6.578 1.797 1.969 1.199 3.523 2.902 4.672 5.109 1.144 2.2 1.718 4.75 1.718 7.656 0 2.906-.574 5.48-1.718 7.719-1.149 2.23-2.703 3.965-4.672 5.203-1.962 1.23-4.152 1.844-6.578 1.844-2.125 0-3.985-.418-5.578-1.25-1.586-.844-2.852-1.93-3.797-3.266v4.047h-7.189v-37.922h7.188Zm15.015 9.937c0-1.707-.355-3.187-1.062-4.437-.7-1.25-1.621-2.196-2.766-2.844a7.473 7.473 0 0 0-3.718-.969 7.174 7.174 0 0 0-3.657 1c-1.148.668-2.07 1.633-2.765 2.89-.7 1.262-1.047 2.747-1.047 4.454 0 1.71.347 3.2 1.047 4.469.695 1.261 1.617 2.226 2.765 2.89 1.145.668 2.364 1 3.656 1a7.18 7.18 0 0 0 3.72-1.015c1.144-.688 2.066-1.66 2.765-2.922.707-1.27 1.062-2.774 1.062-4.516Zm18.44-9.687a10.037 10.037 0 0 1 3.594-3.532c1.488-.851 3.19-1.28 5.109-1.28v7.53h-1.89c-2.262 0-3.966.532-5.11 1.594-1.137 1.055-1.703 2.899-1.703 5.531v14.141h-7.189v-28.39h7.188Zm10.385 9.687c0-2.875.57-5.422 1.718-7.64 1.145-2.22 2.696-3.926 4.656-5.125 1.97-1.196 4.165-1.797 6.594-1.797 2.114 0 3.961.43 5.547 1.28 1.594.856 2.867 1.934 3.828 3.235v-4.047h7.235v28.391h-7.236v-4.156c-.917 1.336-2.186 2.436-3.81 3.312s-3.497 1.314-5.611 1.314c-2.398 0-4.578-.614-6.546-1.844-1.962-1.239-3.513-2.974-4.658-5.204-1.148-2.238-1.719-4.813-1.719-7.719Zm22.343.094c0-1.738-.343-3.227-1.031-4.469-.68-1.25-1.602-2.207-2.766-2.875a7.381 7.381 0 0 0-3.734-1 7.284 7.284 0 0 0-3.688.969c-1.124.648-2.042 1.594-2.75 2.844-.699 1.25-1.046 2.73-1.046 4.437 0 1.711.347 3.203 1.046 4.485.708 1.28 1.633 2.265 2.782 2.953a7.04 7.04 0 0 0 3.656 1.015 7.342 7.342 0 0 0 3.734-1c1.164-.664 2.086-1.616 2.766-2.86.688-1.25 1.031-2.75 1.031-4.5Zm20.143-9.781a10.037 10.037 0 0 1 3.594-3.532c1.488-.851 3.19-1.28 5.109-1.28v7.53h-1.89c-2.262 0-3.966.532-5.11 1.594-1.137 1.055-1.703 2.899-1.703 5.531v14.141h-7.189v-28.39h7.188Zm39.401-4.406-17.578 41.811h-7.64l6.155-14.139-11.39-27.674h8.047l7.328 19.828 7.438-19.828Zm0 0'
        fill={color}
      />
      <g transform='translate(316.139 168.725)' fill={color} />
      <path
        d='M343.191 169.194c-2.73 0-5.187-.602-7.374-1.813-2.188-1.218-3.907-2.936-5.157-5.156-1.242-2.227-1.859-4.797-1.859-7.703 0-2.895.64-5.453 1.922-7.672 1.281-2.227 3.031-3.945 5.25-5.156 2.219-1.219 4.691-1.828 7.422-1.828 2.738 0 5.218.609 7.437 1.828 2.219 1.21 3.969 2.93 5.25 5.156 1.282 2.219 1.922 4.777 1.922 7.672 0 2.906-.656 5.476-1.969 7.703-1.312 2.219-3.09 3.938-5.328 5.156-2.242 1.211-4.746 1.814-7.515 1.814Zm0-6.266a7.56 7.56 0 0 0 3.672-.937c1.145-.633 2.055-1.582 2.735-2.844.687-1.27 1.031-2.813 1.031-4.625 0-2.695-.71-4.77-2.125-6.219-1.418-1.445-3.152-2.172-5.203-2.172-2.055 0-3.773.727-5.156 2.172-1.387 1.45-2.078 3.524-2.078 6.219 0 2.71.671 4.789 2.015 6.234 1.352 1.45 3.055 2.172 5.11 2.172Zm31.812-16.703h-4.969v22.5h-7.265v-22.5h-3.235v-5.89h3.234v-1.438c0-3.488.989-6.05 2.97-7.688 1.976-1.632 4.968-2.406 8.968-2.312v6.047c-1.75-.032-2.969.261-3.656.875-.68.617-1.016 1.726-1.016 3.328v1.187h4.969Zm-201.641 58.092v5.782h-9.531v29.984h-7.172v-29.984h-9.532v-5.782Zm19.936 6.969c2.145 0 4.055.469 5.735 1.406 1.675.938 2.984 2.325 3.922 4.157.937 1.824 1.406 4.015 1.406 6.578v16.656h-7.172v-15.688c0-2.25-.57-3.976-1.703-5.187-1.125-1.219-2.657-1.828-4.594-1.828-1.992 0-3.559.61-4.703 1.828-1.137 1.21-1.703 2.938-1.703 5.188v15.687h-7.189v-37.922h7.188v13.063c.914-1.227 2.14-2.192 3.672-2.891 1.539-.695 3.254-1.047 5.14-1.047Zm20.224-2.984c-1.262 0-2.313-.399-3.156-1.203-.836-.801-1.25-1.801-1.25-3 0-1.188.414-2.18 1.25-2.985.843-.812 1.894-1.218 3.156-1.218 1.27 0 2.32.406 3.156 1.218.832.805 1.25 1.797 1.25 2.985 0 1.199-.418 2.199-1.25 3-.836.804-1.887 1.203-3.156 1.203Zm3.547 3.39v28.391h-7.189v-28.39Zm21.508-.406c3.382 0 6.117 1.07 8.203 3.203 2.082 2.137 3.125 5.117 3.125 8.938v16.656h-7.172v-15.688c0-2.25-.57-3.976-1.703-5.187-1.125-1.219-2.657-1.828-4.594-1.828-1.992 0-3.559.61-4.703 1.828-1.137 1.21-1.703 2.938-1.703 5.188v15.687h-7.189v-28.39h7.188v3.53c.945-1.226 2.164-2.19 3.656-2.89 1.488-.695 3.117-1.047 4.89-1.047Zm27.974-.063c2.114 0 3.973.422 5.578 1.266 1.614.836 2.88 1.918 3.797 3.25v-4.047h7.235v28.594c0 2.633-.532 4.984-1.594 7.047-1.063 2.07-2.652 3.71-4.766 4.922-2.117 1.207-4.68 1.812-7.687 1.812-4.032 0-7.34-.937-9.922-2.812-2.574-1.875-4.031-4.438-4.375-7.688h7.125c.375 1.301 1.18 2.332 2.422 3.094 1.25.77 2.765 1.156 4.547 1.156 2.082 0 3.77-.625 5.062-1.875 1.3-1.242 1.953-3.125 1.953-5.656v-4.406c-.918 1.336-2.187 2.45-3.812 3.344-1.625.882-3.48 1.328-5.563 1.328-2.398 0-4.586-.614-6.562-1.844-1.98-1.238-3.543-2.973-4.688-5.203-1.148-2.238-1.719-4.813-1.719-7.719 0-2.875.57-5.422 1.72-7.64 1.144-2.22 2.695-3.926 4.655-5.125 1.97-1.196 4.165-1.797 6.594-1.797Zm9.375 14.657c0-1.738-.343-3.227-1.031-4.469-.68-1.25-1.602-2.207-2.766-2.875a7.381 7.381 0 0 0-3.734-1 7.284 7.284 0 0 0-3.688.969c-1.124.648-2.042 1.594-2.75 2.844-.699 1.25-1.046 2.73-1.046 4.437 0 1.711.347 3.203 1.046 4.485.708 1.28 1.633 2.265 2.782 2.953a7.04 7.04 0 0 0 3.656 1.015 7.342 7.342 0 0 0 3.734-1c1.164-.664 2.086-1.616 2.766-2.86.688-1.25 1.031-2.75 1.031-4.5Zm23.83 14.672c-2.324 0-4.414-.418-6.265-1.25-1.844-.844-3.305-1.985-4.375-3.422-1.076-1.438-1.664-3.024-1.766-4.767h7.219c.144 1.094.687 2 1.625 2.719.937.719 2.101 1.078 3.5 1.078 1.375 0 2.441-.27 3.203-.812.77-.551 1.156-1.254 1.156-2.11 0-.926-.469-1.617-1.406-2.078-.938-.457-2.434-.96-4.485-1.515-2.117-.508-3.851-1.036-5.203-1.579a9.174 9.174 0 0 1-3.484-2.515c-.969-1.125-1.453-2.645-1.453-4.563a7.36 7.36 0 0 1 1.344-4.297c.906-1.3 2.203-2.328 3.89-3.078 1.696-.758 3.692-1.14 5.985-1.14 3.382 0 6.082.851 8.093 2.547 2.02 1.687 3.13 3.968 3.328 6.843h-6.859c-.105-1.133-.578-2.035-1.422-2.703-.836-.664-1.949-1-3.343-1-1.305 0-2.305.242-3 .719-.7.48-1.047 1.148-1.047 2 0 .96.472 1.687 1.421 2.187.958.493 2.446.993 4.47 1.5 2.05.524 3.738 1.059 5.062 1.61 1.332.543 2.484 1.386 3.453 2.531.976 1.137 1.488 2.648 1.531 4.531 0 1.637-.453 3.106-1.36 4.406-.905 1.293-2.21 2.31-3.905 3.047-1.688.74-3.658 1.112-5.908 1.112Zm0 0'
        fill={color}
      />
    </svg>
  );
}
