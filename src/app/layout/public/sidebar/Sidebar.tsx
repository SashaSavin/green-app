import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileSettings } from './components/ProfileSettings';
import { Profile } from './components/Profile';
import { useChatStore } from 'store';

export const Sidebar = (): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [isActive, setActive] = useState<number | null>(null);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const navigate = useNavigate();
  const { selectUser } = useChatStore();

  const handleClick = (itemId: number, name: string) => {
    setActive((prevState) => (prevState === itemId ? null : itemId));
    navigate(`/chat/${name}`, { state: { user: name } });
    selectUser(name);
  };

  const handleChangePage = () => {
    navigate('/find');
  };

  return (
    <>
      {openProfile ? (
        <ProfileSettings setOpenProfile={setOpenProfile} />
      ) : (
        <Profile
          toggle={toggle}
          setOpenProfile={setOpenProfile}
          setToggle={setToggle}
          handleChangePage={handleChangePage}
          handleClick={handleClick}
          isActive={isActive}
        />
      )}
    </>
  );
};
