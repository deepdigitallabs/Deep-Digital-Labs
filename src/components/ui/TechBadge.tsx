import React from 'react';

export interface TechBadgeProps {
  name: string;
  className?: string;
  variant?: 'default' | 'card' | 'outline' | 'pill';
  size?: 'sm' | 'md' | 'lg';
}

export function TechIcon({ name, className = 'w-4 h-4' }: { name: string; className?: string }) {
  const normalized = name.toLowerCase().trim();

  // Next.js
  if (normalized.includes('next.js') || normalized.includes('nextjs')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#000000" />
        <path
          d="M18.665 21.978C16.697 23.251 14.417 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 2.923-1.046 5.602-2.784 7.685l-10.97-14.22H8.4v13.07h1.846V8.675l8.419 13.303zm-3.111-13.443h1.846v6.929h-1.846V8.535z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // React & React Native
  if (normalized === 'react' || normalized.includes('react 19')) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348">
        <title>React</title>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  if (normalized.includes('react native')) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348">
        <title>React Native</title>
        <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
        <g stroke="#00D8FF" strokeWidth="1.1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // Node.js
  if (normalized.includes('node.js') || normalized.includes('nodejs') || normalized === 'node') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l9.526 5.5v11L12 24l-9.526-5.5v-11L12 2z"
          fill="#539E43"
        />
        <path
          d="M12 5.5l6.5 3.75v7.5L12 20.5l-6.5-3.75v-7.5L12 5.5z"
          fill="#333333"
        />
        <path
          d="M11.99 8.2v7.6m-3.2-5.7l6.4 3.8m-6.4 0l6.4-3.8"
          stroke="#539E43"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // PostgreSQL
  if (normalized.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {/* PostgreSQL Elephant outline in signature blue */}
        <path
          d="M12.012 0c-3.486 0-6.102 1.98-7.234 4.545a6.837 6.837 0 00-.528 2.016 7.027 7.027 0 00-.072.936c0 .17.009.34.024.507.037.408.106.804.204 1.188.006.024.015.048.021.072.087.327.204.64.348.939l-.027.027c-.246.246-.423.555-.513.897-.099.375-.084.774.045 1.14.129.366.369.678.687.9.318.222.699.333 1.086.318h.048c.306 0 .6-.078.861-.225.261-.147.477-.36.627-.618l.051-.087c.228.168.477.309.741.42.066.03.132.057.198.084.342.138.705.234 1.08.285.045.006.09.012.135.015.42.048.849.048 1.269 0 .045-.003.09-.009.135-.015.375-.051.738-.147 1.08-.285.066-.027.132-.054.198-.084.264-.111.513-.252.741-.42l.051.087c.15.258.366.471.627.618.261.147.555.225.861.225h.048c.387.015.768-.096 1.086-.318.318-.222.558-.534.687-.9.129-.366.144-.765.045-1.14a2.298 2.298 0 00-.513-.897l-.027-.027c.144-.299.261-.612.348-.939.006-.024.015-.048.021-.072.098-.384.167-.78.204-1.188.015-.167.024-.337.024-.507 0-.315-.024-.627-.072-.936a6.837 6.837 0 00-.528-2.016C18.114 1.98 15.498 0 12.012 0z"
          fill="#336791"
        />
        <circle cx="9.2" cy="7.8" r="1.1" fill="#FFFFFF" />
        <path
          d="M10.8 12.5c.8 1.2 2 1.6 3.4 1.2"
          stroke="#FFFFFF"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  // Flutter
  if (normalized.includes('flutter')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M14.314 0L2.3 12l3.7 3.7L21.684 0h-7.37z" fill="#42A5F5" />
        <path d="M14.286 11.286L8.6 16.971 12.3 20.67l3.7-3.7 5.7-5.684h-7.414z" fill="#0D47A1" />
        <path d="M8.6 16.971l3.7 3.7-3.7 3.329H1.2l7.4-7.029z" fill="#29B6F6" />
      </svg>
    );
  }

  // Android
  if (normalized.includes('android')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#3DDC84">
        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.1561-.2705.0633-.6163-.2073-.7724-.2705-.1561-.6163-.0633-.7724.2073l-2.0234 3.5046C15.3202 8.163 13.7042 7.8 12 7.8c-1.7041 0-3.3201.363-4.8744 1.0037L5.1022 5.2991c-.1561-.2706-.5018-.3634-.7724-.2073-.2705.1561-.3634.5019-.2073.7724l1.996 3.4572C2.6886 11.1705.3432 14.943.072 19.32h23.856c-.2712-4.377-2.6166-8.1495-6.0475-9.9986" />
      </svg>
    );
  }

  // iOS / Apple
  if (normalized === 'ios' || normalized.includes('apple') || normalized.includes('iphone')) {
    return (
      <svg className={className} viewBox="0 0 170 170" fill="currentColor">
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.71-11.65-14.01-6.19-9.5-11.02-20.2-14.48-32.08-3.46-11.89-5.19-23.01-5.19-33.37 0-14.43 3.65-26.4 10.96-35.91 7.31-9.51 16.43-14.36 27.35-14.56 5.48.12 11.51 1.63 18.09 4.54 6.58 2.91 10.6 4.41 12.06 4.5 2.12-.34 6.46-1.93 13.02-4.77 6.56-2.84 12.38-4.14 17.47-3.9 12.51.98 22.84 5.76 30.98 14.35-10.96 6.64-16.32 15.7-16.08 27.18.24 9.17 3.73 16.89 10.47 23.16 6.74 6.27 14.79 9.94 24.16 11.01-2.22 6.66-4.99 13.62-8.31 20.88zM119.22 31.84c0-7.39 2.66-14.48 7.99-21.28 5.33-6.8 11.97-10.56 19.92-11.28.24 1.1.36 2.21.36 3.34 0 7.27-2.73 14.37-8.18 21.31-5.46 6.94-12.09 10.64-19.89 11.1-0.13-1.07-.2-2.14-.2-3.19z" />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes('typescript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#3178C6">
        <path d="M0 0h24v24H0z" rx="4" />
        <path d="M12.5 17.2c-.3.5-.7.8-1.2 1.1-.5.3-1.1.4-1.7.4-1 0-1.8-.3-2.4-.8-.6-.6-.9-1.4-.9-2.5 0-.6.1-1.1.4-1.6.3-.5.7-.9 1.2-1.2.5-.3 1.1-.4 1.7-.4.6 0 1.1.1 1.6.4.4.2.8.6 1 1l-1.5 1c-.1-.3-.3-.5-.5-.6-.2-.2-.5-.2-.8-.2-.4 0-.8.2-1 .5-.3.3-.4.8-.4 1.4 0 .6.1 1.1.4 1.4.3.3.7.5 1.1.5.3 0 .6-.1.8-.3.2-.2.4-.4.5-.7l1.6.9zm8.5-.7c0 .7-.2 1.3-.5 1.8-.4.5-.9.9-1.5 1.2-.6.3-1.3.4-2.1.4-1 0-1.9-.3-2.6-.8-.7-.5-1.1-1.3-1.2-2.2l1.9-.3c.1.5.3.9.7 1.2.3.3.8.4 1.3.4.5 0 .9-.1 1.2-.4.3-.2.4-.5.4-.9 0-.3-.1-.5-.3-.7-.2-.2-.5-.3-.9-.4l-1.3-.4c-.9-.3-1.6-.7-2-1.2-.4-.5-.6-1.1-.6-1.9 0-.7.2-1.3.6-1.8.4-.5.9-.9 1.5-1.2.6-.3 1.3-.4 2-.4.9 0 1.7.2 2.3.7.7.5 1.1 1.1 1.2 2l-1.8.3c-.1-.4-.3-.7-.6-.9-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.3.2-.4.5-.4.8 0 .3.1.5.3.7.2.2.5.3.9.4l1.2.4c.9.3 1.6.7 2 1.2.4.5.6 1.1.6 1.9z" fill="#ffffff" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m21.758 1.134a4.42 4.42 0 00-2.34-2.28 4.298 4.298 0 00-.776-.239 5.498 5.498 0 00-.86-.068c-.135 0-.27.005-.404.015a.262.262 0 00-.236.216c-.328 1.488-1.543 2.6-3.037 2.766H1.054a.885.885 0 00-.882.885c-.004.593.078 1.185.244 1.756 1.455 5.012 6.012 8.535 11.237 8.653 5.484.125 10.366-3.327 12.036-8.54.21-.659.317-1.345.318-2.037a4.34 4.34 0 00-.04-.54c-.003-.027-.008-.053-.016-.078" />
      </svg>
    );
  }

  // Stripe
  if (normalized.includes('stripe')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#635BFF">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.825.5 6.85.5 2.87 3.655 2.87 8.932c0 6.643 9.13 6.99 9.13 10.584 0 1.053-.943 1.54-2.298 1.54-2.52 0-5.385-1.196-7.346-2.37l-.92 5.568C3.393 25.438 6.55 26 9.878 26c6.262 0 10.548-3.084 10.548-8.57 0-7.07-6.45-7.474-6.45-8.28z" />
      </svg>
    );
  }

  // Firebase
  if (normalized.includes('firebase')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3.89 15.67L6.41 1.72a.7.7 0 011.28-.27l3.22 6.08-7.02 8.14z" fill="#FFA000" />
        <path d="M13.62 9.07l2.12-4.06a.7.7 0 011.27.05L20.1 15.67l-6.48-6.6z" fill="#F57C00" />
        <path d="M3.89 15.67l8.11 4.58a.7.7 0 00.67 0l7.43-4.58-6.48-6.6-9.73 6.6z" fill="#FFCA28" />
      </svg>
    );
  }

  // Vercel
  if (normalized.includes('vercel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0L12 1z" />
      </svg>
    );
  }

  // AWS / Cloud Services (EC2, S3, Lambda, RDS, CloudFront, Route 53, CloudWatch, IAM)
  if (
    normalized.includes('aws') ||
    normalized.includes('cloud hosting') ||
    normalized === 'ec2' ||
    normalized === 's3' ||
    normalized === 'lambda' ||
    normalized === 'rds' ||
    normalized.includes('cloudfront') ||
    normalized.includes('route 53') ||
    normalized.includes('cloudwatch')
  ) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF9900">
        <path d="M12.758 13.924c-.388.196-.826.31-1.288.31-1.42 0-2.316-.94-2.316-2.42 0-1.503.953-2.476 2.37-2.476.435 0 .848.106 1.234.298v-2.02a4.42 4.42 0 00-1.26-.178C8.59 7.438 6.5 9.24 6.5 11.834c0 2.576 2.057 4.398 4.965 4.398.814 0 1.547-.132 2.293-.418v-1.89zm5.32 2.146l-2.012-7.07h-1.927l2.585 7.91h1.536l2.57-7.91h-1.916l-2.012 7.07h.176z" />
        <path d="M19.98 18.232C17.38 20.088 13.9 21.08 10.428 21.08c-4.872 0-9.26-1.944-12.56-5.184-.257-.253-.028-.598.28-.405 3.553 2.28 7.92 3.65 12.44 3.65 3.09 0 6.47-.736 9.54-2.26.467-.23.876.353.412.751h-.56z" fill="#FF9900" />
      </svg>
    );
  }

  // Python
  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path
          d="M11.914 0C5.82 0 6.193 2.656 6.193 2.656l.007 2.751h5.811v.825H3.902S0 5.786 0 11.905c0 6.12 3.402 5.908 3.402 5.908h2.031v-2.846s-.11-3.402 3.348-3.402h5.753v-.853s.51-5.712-2.622-5.712zm-3.32 1.708a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1z"
          fill="#3776AB"
        />
        <path
          d="M12.086 24c6.094 0 5.72-2.656 5.72-2.656l-.007-2.752H11.988v-.824h8.109s3.903.447 3.903-5.672c0-6.12-3.402-5.909-3.402-5.909h-2.031v2.846s.11 3.402-3.348 3.402H9.466v.853s-.51 5.712 2.62 5.712zm3.32-1.708a1.05 1.05 0 110-2.1 1.05 1.05 0 010 2.1z"
          fill="#FFD438"
        />
      </svg>
    );
  }

  // FastAPI
  if (normalized.includes('fastapi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#009688">
        <path d="M12 0l10.392 6v12L12 24 1.608 18V6L12 0zm1 4.5l-6 8h5l-1 7 6-8h-5l1-7z" fill="#009688" />
      </svg>
    );
  }

  // GraphQL
  if (normalized.includes('graphql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#E10098">
        <path d="M12 2L2 7.773v11.547L12 25l10-5.68V7.773L12 2zm7.98 16.14L12 22.68l-7.98-4.54V8.95L12 4.41l7.98 4.54v9.19z" />
      </svg>
    );
  }

  // SQLite
  if (normalized.includes('sqlite')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#003B57">
        <path d="M18.8 6.2C17.5 4.5 15 3.5 12 3.5S6.5 4.5 5.2 6.2C4.5 7.1 4 8.2 4 9.5v5c0 3.3 3.6 6 8 6s8-2.7 8-6v-5c0-1.3-.5-2.4-1.2-3.3zM12 5.5c3.3 0 6 1.3 6 3s-2.7 3-6 3-6-1.3-6-3 2.7-3 6-3zm6 9c0 1.7-2.7 3-6 3s-6-1.3-6-3v-2.3c1.6 1.4 3.7 2.3 6 2.3s4.4-.9 6-2.3v2.3z" />
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 1.5c-.3 0-.6.1-.7.4C10.5 3 7 8.5 7 13.5c0 3.9 2.5 7.1 5 8.5v-20.5z" fill="#47A248" />
        <path d="M12 1.5c.3 0 .6.1.7.4C13.5 3 17 8.5 17 13.5c0 3.9-2.5 7.1-5 8.5v-20.5z" fill="#499D4A" />
        <path d="M12 18.5v4.5c.3-.2.6-.4.8-.7.8-.9.7-2.3-.8-3.8z" fill="#3FA037" />
      </svg>
    );
  }

  // MySQL
  if (normalized.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#00758F">
        <path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c4.41 0 7 1.34 7 2s-2.59 2-7 2-7-1.34-7-2 2.59-2 7-2zm-7 5.17c1.61.85 4.14 1.33 7 1.33s5.39-.48 7-1.33V11c0 .82-3.13 2-7 2s-7-1.18-7-2v-.83zm0 4.5c1.61.85 4.14 1.33 7 1.33s5.39-.48 7-1.33v1.83c0 .82-3.13 2-7 2s-7-1.18-7-2v-1.83z" />
      </svg>
    );
  }

  // Supabase
  if (normalized.includes('supabase')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M13.4 22.4c-.6.8-1.9.4-1.9-.6v-8.3h8.3c1 0 1.4 1.3.6 1.9l-7 7z" fill="#3ECF8E" />
        <path d="M10.6 1.6c.6-.8 1.9-.4 1.9.6v8.3H4.2c-1 0-1.4-1.3-.6-1.9l7-7z" fill="#24B47E" />
      </svg>
    );
  }

  // Redis
  if (normalized.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#DC382D">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 8.5L3.5 6.5 12 2.2l8.5 4.3L12 10.5zM2 12l10 5 10-5v3l-10 5-10-5v-3zm0 5l10 5 10-5v2l-10 5-10-5v-2z" />
      </svg>
    );
  }

  // Git & GitHub
  if (normalized === 'git') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F05032">
        <path d="M23.546 10.93L13.067.452a1.5 1.5 0 00-2.124 0L8.83 2.565l2.678 2.678a1.782 1.782 0 012.257 2.27l2.576 2.576a1.776 1.776 0 011.666 2.873 1.785 1.785 0 01-2.484-2.484l-2.47-2.47v5.52a1.782 1.782 0 11-1.5 0V7.818a1.783 1.783 0 01-.986-2.338L7.886 2.798.454 10.23a1.5 1.5 0 000 2.125l10.479 10.478a1.5 1.5 0 002.124 0l10.489-10.479a1.5 1.5 0 000-2.424z" />
      </svg>
    );
  }

  if (normalized.includes('github actions')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2088FF">
        <circle cx="12" cy="12" r="10" stroke="#2088FF" strokeWidth="2" fill="none" />
        <path d="M10 8l6 4-6 4V8z" fill="#2088FF" />
      </svg>
    );
  }

  if (normalized.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }

  // Netlify
  if (normalized.includes('netlify')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#00C7B7">
        <path d="M16.5 7.5L12 3 7.5 7.5l4.5 4.5 4.5-4.5zm-9 9L3 12l4.5-4.5L12 12l-4.5 4.5zm9 0L12 12l4.5-4.5 4.5 4.5-4.5 4.5zm-4.5 4.5L7.5 16.5 12 12l4.5 4.5-4.5 4.5z" />
      </svg>
    );
  }

  // JavaScript
  if (normalized === 'javascript' || normalized === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F7DF1E">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 17.5c.5.8 1.2 1.3 2.2 1.3 1.3 0 2-.7 2-2.1v-6.2H9.2v6.2c0 .6-.3.9-.8.9-.4 0-.7-.3-.9-.6l-1.5.5zm8.5-.2c.6.7 1.5 1.1 2.5 1.1 1.4 0 2.4-.8 2.4-2 0-1.2-.8-1.7-1.9-2.2l-.7-.3c-.7-.3-1.1-.6-1.1-1.1 0-.5.4-.9 1.1-.9.6 0 1.1.2 1.5.7l1.3-.9c-.6-.9-1.5-1.3-2.7-1.3-1.5 0-2.4.9-2.4 2.1 0 1.1.7 1.7 1.8 2.1l.7.3c.7.3 1.2.6 1.2 1.2 0 .6-.5 1-1.3 1-.8 0-1.4-.4-1.8-1l-1.6 1.2z" fill="#000000" />
      </svg>
    );
  }

  // HTML5
  if (normalized.includes('html')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#E34F26">
        <path d="M1.5 0h21l-1.9 21.5L12 24l-8.6-2.5L1.5 0zm16.4 7H6.1l.4 4.5h9.3l-.4 4.5-3.4 1-3.4-1-.2-2.3H6.5l.4 4.2 5.1 1.4 5.1-1.4 1.4-10.9z" />
      </svg>
    );
  }

  // CSS3
  if (normalized.includes('css')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#1572B6">
        <path d="M1.5 0h21l-1.9 21.5L12 24l-8.6-2.5L1.5 0zm16.4 7H6.1l.4 4.5h9.3l-.4 4.5-3.4 1-3.4-1-.2-2.3H6.5l.4 4.2 5.1 1.4 5.1-1.4 1.4-10.9z" />
      </svg>
    );
  }

  // Dart
  if (normalized.includes('dart')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#0175C2">
        <path d="M4.1 3.5L13.8 2 20 8.2l-6.8 6.8H5.8L2 11.2l2.1-7.7zm8.3 12.3l4.8 4.7 4.8-1.5L20 8.2l-7.6 7.6z" />
      </svg>
    );
  }

  // Kotlin
  if (normalized.includes('kotlin')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M24 24H0V0h24L12 12l12 12z" fill="#7F52FF" />
      </svg>
    );
  }

  // Swift & SwiftUI
  if (normalized.includes('swift')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FA7343">
        <path d="M21.9 14.5c-.3 1.2-1.3 2.9-2.7 4.4 2-1.8 3.5-4.1 4.1-6.7-1.1 2.3-2.9 4.3-5 5.7 1.8-2.6 2.6-5.8 2.2-9-.9 2.5-2.6 4.7-4.8 6.1.9-2.2 1.3-4.7.9-7.1-.9 2.1-2.4 4-4.3 5.3-.2-.5-.4-1-.5-1.5 1.5-1.8 2.5-4.1 2.8-6.5C13 2 10.7 3.5 8.9 5.5 8 4.2 7.5 2.8 7.3 1.4 5.4 3.9 4.3 7 4.2 10.2c-.1 2 .4 4 1.3 5.8-2.2-1.5-3.8-3.7-4.6-6.2.2 3.8 2.1 7.4 5.2 9.6 3.6 2.6 8.4 3.1 12.5 1.3 1.2-.5 2.3-1.3 3.3-2.2v-.1l-.1.1c.1-.1 0-.1 0 0z" />
      </svg>
    );
  }

  // Xcode / Studio
  if (normalized.includes('xcode') || normalized.includes('studio')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#147EFB">
        <path d="M21 3L3 21m18-6L9 3m6 18L3 9" stroke="#147EFB" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Linux
  if (normalized.includes('linux')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C9.5 2 8 4 8 6.5v4c0 .8-.2 1.6-.7 2.2C6.4 13.8 6 15.2 6 17c0 2.8 2.7 5 6 5s6-2.2 6-5c0-1.8-.4-3.2-1.3-4.3-.5-.6-.7-1.4-.7-2.2v-4C16 4 14.5 2 12 2z" />
      </svg>
    );
  }

  // Kubernetes
  if (normalized.includes('k8s') || normalized.includes('kubernetes')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#326CE5">
        <path d="M12 2l8.7 5v10L12 22l-8.7-5V7L12 2zm0 3.2L5.8 8.8v6.4L12 18.8l6.2-3.6V8.8L12 5.2z" />
        <circle cx="12" cy="12" r="3" fill="#326CE5" />
      </svg>
    );
  }

  // Terraform
  if (normalized.includes('terraform')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#844FBA">
        <path d="M1.5 1.5h6.5v7H1.5zm8 4h6.5v7H9.5zm8 0h6.5v7h-6.5zm-8 8.5h6.5v7H9.5z" />
      </svg>
    );
  }

  // Nginx
  if (normalized.includes('nginx')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#009639">
        <path d="M12 0l10.392 6v12L12 24 1.608 18V6L12 0zm-4 7v10l8-10v10" stroke="#009639" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // CI/CD / DevOps
  if (normalized.includes('ci/cd') || normalized.includes('devops')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    );
  }

  // Express / API
  if (normalized.includes('express') || normalized.includes('rest api')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#333333" />
        <path d="M6 15l4-6m-4 0l4 6m3-3h5m-2.5-3v6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Monitoring & Security
  if (normalized.includes('monitoring') || normalized.includes('watch') || normalized.includes('sla')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    );
  }

  // Authentication
  if (normalized.includes('auth')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-1.5 1.5L16 7l-1.5-1.5M19 5l-2.5 2.5m-3-3l1.5 1.5M9 11l-6 6v3h3l6-6" />
        <circle cx="16" cy="8" r="5" />
      </svg>
    );
  }

  // Microservices
  if (normalized.includes('microservice')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="8" height="8" rx="2" />
        <rect x="14" y="2" width="8" height="8" rx="2" />
        <rect x="2" y="14" width="8" height="8" rx="2" />
        <rect x="14" y="14" width="8" height="8" rx="2" />
      </svg>
    );
  }

  // JSON
  if (normalized === 'json') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#292929" />
        <path d="M7 6c-1.5 0-2 1-2 2.5v1.5c0 1-.5 1.5-1.5 2 1 .5 1.5 1 1.5 2v1.5c0 1.5.5 2.5 2 2.5m10-12c1.5 0 2 1 2 2.5v1.5c0 1 .5 1.5 1.5 2-1 .5-1.5 1-1.5 2v1.5c0 1.5-.5 2.5-2 2.5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Responsive Design
  if (normalized.includes('responsive')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }

  // Payments
  if (normalized.includes('payment') || normalized.includes('stripe') || normalized.includes('billing')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    );
  }

  // E-commerce
  if (normalized.includes('commerce') || normalized.includes('shop') || normalized.includes('store')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    );
  }

  // Dashboards & Business Software
  if (normalized.includes('dashboard') || normalized.includes('crm') || normalized.includes('erp') || normalized.includes('software')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    );
  }

  // Booking & Appointment
  if (normalized.includes('booking') || normalized.includes('appointment') || normalized.includes('calendar')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    );
  }

  // Customer Portals / Management
  if (normalized.includes('portal') || normalized.includes('customer') || normalized.includes('user')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  // Push Notifications
  if (normalized.includes('notification')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    );
  }

  // Domain & DNS Setup
  if (normalized.includes('dns') || normalized.includes('domain')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    );
  }

  // Server Setup / Website Hosting
  if (normalized.includes('server') || normalized.includes('hosting')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    );
  }

  // Maintenance & Backup & Recovery
  if (normalized.includes('maintenance') || normalized.includes('backup') || normalized.includes('recovery')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    );
  }

  // Database Management & Cloud Databases
  if (normalized.includes('database')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00758F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  // Tag Manager
  if (normalized.includes('tag manager')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#4285F4">
        <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
      </svg>
    );
  }

  // Conversion / Growth
  if (normalized.includes('conversion') || normalized.includes('strategy') || normalized.includes('cro')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    );
  }

  if (normalized.includes('security') || normalized.includes('iam') || normalized.includes('access')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    );
  }

  // Technical SEO
  if (normalized.includes('seo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#2563EB" strokeWidth="2" />
        <path d="M16.5 16.5L21 21" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M8 11.5l2 2 4-4" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Core Web Vitals / Performance
  if (normalized.includes('core web vitals') || normalized.includes('vitals') || normalized.includes('speed')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
        <circle cx="12" cy="12" r="3" fill="#10B981" />
      </svg>
    );
  }

  // Google Business Profile / Local SEO / Maps
  if (normalized.includes('business profile') || normalized.includes('local seo') || normalized.includes('maps') || normalized.includes('map')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
          fill="#EA4335"
        />
        <circle cx="12" cy="9" r="2.8" fill="#FFFFFF" />
        <circle cx="12" cy="9" r="1.5" fill="#4285F4" />
      </svg>
    );
  }

  // Schema Markup / Schema.org
  if (normalized.includes('schema')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#0284C7" />
        <path
          d="M8 8.5L4.5 12 8 15.5m8-7l3.5 3.5-3.5 3.5m-5 1.5l2-10"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Analytics / Google Analytics / Website Analytics
  if (normalized.includes('analytic')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="13" width="5" height="9" rx="2.5" fill="#F9AB00" />
        <rect x="9.5" y="7.5" width="5" height="14.5" rx="2.5" fill="#E37400" />
        <rect x="17" y="2" width="5" height="20" rx="2.5" fill="#EA4335" />
      </svg>
    );
  }

  // Google Search Console
  if (normalized.includes('search console') || normalized.includes('console')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 17l6-6 4 4 6-8" stroke="#4285F4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="7" r="2" fill="#EA4335" />
        <circle cx="14" cy="15" r="2" fill="#FBBC05" />
        <circle cx="10" cy="11" r="2" fill="#34A853" />
        <circle cx="4" cy="17" r="2" fill="#4285F4" />
      </svg>
    );
  }

  // Keyword Research / Content SEO / Strategy
  if (normalized.includes('keyword') || normalized.includes('content')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    );
  }

  // Firestore / Cloud Firestore
  if (normalized.includes('firestore')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FFA000">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
      </svg>
    );
  }

  // SendGrid
  if (normalized.includes('sendgrid')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#1A82E2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2V7h2v10z" />
      </svg>
    );
  }

  // Offline Sync / Connectivity
  if (normalized.includes('offline') || normalized.includes('sync')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </svg>
    );
  }

  // Default subtle fallback dot
  return (
    <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 inline-block shrink-0" />
  );
}

export function TechBadge({
  name,
  className = '',
  variant = 'default',
  size = 'md'
}: TechBadgeProps) {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[11px] gap-1.5',
    md: 'px-3 py-1.5 text-xs gap-2',
    lg: 'px-4 py-2 text-sm gap-2.5'
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  // Styled with dark navy aesthetic inspired by developer tech badges, adaptable to light/dark themes
  return (
    <div
      className={`inline-flex items-center rounded-full font-medium transition-all duration-200 select-none cursor-default
        bg-slate-100 hover:bg-slate-200/80 text-slate-800 border border-slate-200/90
        dark:bg-[#0c1322] dark:hover:bg-[#111a30] dark:text-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700
        shadow-xs hover:shadow-sm ${sizeClasses[size]} ${className}`}
    >
      <div className="shrink-0 flex items-center justify-center">
        <TechIcon name={name} className={iconSizes[size]} />
      </div>
      <span className="tracking-tight whitespace-nowrap">{name}</span>
    </div>
  );
}
