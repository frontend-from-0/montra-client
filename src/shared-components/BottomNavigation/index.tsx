import HomeIcon from '@mui/icons-material/Home';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const BottomNavigation = () => {
  return (
    <div>
      <div>
        <button>
          <HomeIcon />
        </button>
        <button>
          <SyncAltOutlinedIcon />
        </button>
      </div>
      <div>
        <button>
          <ControlPointTwoToneIcon />
        </button>
      </div>
      <div>
        <button>
          <DataSaverOffOutlinedIcon />
        </button>
        <button>
          <AccountCircleOutlinedIcon />
        </button>
      </div>
    </div>
  );
};
