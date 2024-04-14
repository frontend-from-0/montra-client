import { styled, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledDiv = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flex: 'end',
  flexDirection: 'column',
  margin: '100px 30px 0 30px',
}));

const StyledDivPrice = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flex: 'end',
  flexDirection: 'column',
}));

export const PriceSection = () => {
  return (
    <StyledDiv className='styledDiv'>
      <StyledDivPrice className='StyledDivPrice'>
        <Typography sx={{ color: '#D3D3D3', fontWeight: '600' }}>
          How much?
        </Typography>
        <Typography variant='h3' sx={{ fontWeight: 'bold', color: 'white' }}>
          $0
        </Typography>
      </StyledDivPrice>
    </StyledDiv>
  );
};
