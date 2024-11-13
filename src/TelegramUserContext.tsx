// UserContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

interface UserProfile {
  id:string
  first_name: string;
  last_name: string;
  username: string;
  photoUrl: string;
}

interface UserContextProps {
  user: UserProfile | null;
  fetchUser: () => void;
}

const TelegramUserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);

  const fetchUser = () => {

    const userTGGG = window.Telegram.WebApp.initDataUnsafe?.user;
    const botId = '7763341735:AAHQ4JnU4Mw1tcXJE1QXZt8ezLM5L48t-6w'; // Yaha apna Bot ID dalein
    const userId = userTGGG?.id;

    axios.get(`https://api.telegram.org/bot${botId}/getChat?chat_id=${userId}`)
      .then((response: any) => {
        const result = response.data.result;
        
        if (result.photo?.small_file_id) {
          const fileId = result.photo.small_file_id;
          axios.get(`https://api.telegram.org/bot${botId}/getFile?file_id=${fileId}`)
            .then((fileResponse: any) => {
              const filePath = fileResponse.data.result.file_path;
              const photoUrl = `https://api.telegram.org/file/bot${botId}/${filePath}`;

              setUser({
                id:result.id,
                first_name: result.first_name,
                last_name: result.last_name==null?"":result.last_name,
                username: result.username,
                photoUrl: photoUrl
              });
            });
        }
        else{
            setUser({
                id:result.id,
                first_name: result.first_name,
                last_name: result.last_name==null?"":result.last_name,
                username: result.username,
                photoUrl: ""
              });
        }
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <TelegramUserContext.Provider value={{ user, fetchUser }}>
      {children}
    </TelegramUserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(TelegramUserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
