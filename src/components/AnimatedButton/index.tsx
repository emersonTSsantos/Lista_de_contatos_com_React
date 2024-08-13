import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../store/slices/contactSlice';
import { Button, Icon, ButtonText } from './styles';
import gsap from 'gsap';

interface AnimatedButtonProps {
  contactId: number;
  onRemoveComplete: () => void; // Callback to notify when the removal is complete
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ contactId, onRemoveComplete }) => {
  const dispatch = useDispatch();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const trashCanRef = useRef<HTMLElement>(null);
  const trashClockRef = useRef<HTMLElement>(null);
  const checkRef = useRef<HTMLElement>(null);
  const buttonTextRef = useRef<HTMLElement>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      gsap.to(buttonTextRef.current, { opacity: 0, duration: 0.1 });
      
      gsap.to(trashCanRef.current, {
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0,
        duration: 0.7,
        onComplete: () => {
          gsap.to(trashClockRef.current, {
            opacity: 1,
            duration: 0.7,
            delay: 0.5,
            onComplete: () => {
              setTimeout(() => {
                gsap.to(trashClockRef.current, { opacity: 0, duration: 0.5 });
                gsap.to(checkRef.current, { opacity: 1, duration: 0.5, onComplete: () => {
                  dispatch(removeContact(contactId));
                  onRemoveComplete(); // Notify that removal is complete
                }});
              }, 2000);
            }
          });
        }
      });
    }
  };

  return (
    <Button ref={buttonRef} onClick={handleClick}>
      <Icon ref={trashCanRef} className="fa-solid fa-trash-can"></Icon>
      <Icon ref={trashClockRef} className="fa-solid fa-rotate-left"></Icon>
      <Icon ref={checkRef} className="fa-solid fa-check"></Icon>
      <ButtonText ref={buttonTextRef}>Remover</ButtonText>
    </Button>
  );
};

export default AnimatedButton;
