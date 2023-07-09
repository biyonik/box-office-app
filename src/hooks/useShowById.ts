import { useEffect, useState } from 'react';
import { ShowService } from '../services/show.service';

export const useShowById = (id: string) => {
  const [show, setShow] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    ShowService.getShowById(id).then(_show => {
      setShow(_show);
      setLoading(false);
    });
  }, []);

  return { show, loading };
};
