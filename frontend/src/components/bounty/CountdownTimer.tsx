import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  deadline: string | Date;
  size?: 'sm' | 'base' | 'lg';
}

export function CountdownTimer({ deadline, size = 'base' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<string>('Calculating...');
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const deadlineDate = new Date(deadline);
    const now = new Date();

    if (deadlineDate <= now) {
      setTimeLeft('Expired');
      setIsExpired(true);
      return;
    }

    const updateTimer = () => {
      const now = new Date();
      const diff = deadlineDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft('Expired');
        setIsExpired(true);
        clearInterval(timerId);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      if (size === 'sm') {
        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      } else if (size === 'lg') {
        setTimeLeft(`${days} days, ${hours} hours, ${minutes} minutes`);
      } else {
        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      }
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, [deadline, size]);

  let textColor = 'text-text-primary';
  if (!isExpired) {
    const deadlineDate = new Date(deadline);
    const now = new Date();
    const hoursLeft = (deadlineDate.getTime() - now.getTime()) / (1000 * 60 * 60);

    if (hoursLeft < 1) textColor = 'text-status-error';
    else if (hoursLeft < 24) textColor = 'text-status-warning';
    else textColor = 'text-text-primary';
  }

  const sizeClass = {
    sm: 'text-xs',
    base: 'text-sm',
    lg: 'text-base'
  }[size] || 'text-sm';

  return (
    <span className={`flex items-center gap-2 ${sizeClass} font-mono ${textColor}`}>
      <span>{timeLeft}</span>
    </span>
  );
}