import {
  Box,
  Typography,
  Button,
  Paper,
  CircularProgress,
  Alert,
  Container,
<<<<<<< HEAD
  Chip,
=======
  Link as MuiLink,
  IconButton,
>>>>>>> 126ded7b6c59aa3e503a76a3fd3694b8f971c721
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
<<<<<<< HEAD
  IconButton,
  Tooltip,
  Divider,
  Stack
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import useWalletContext from '../contexts/WalletContext';
import { formatNumber } from '../lib/utils';
import HomeIcon from '@mui/icons-material/Home';
=======
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import useRainbowKitWalletContext from '../contexts/RainbowKitWalletContext';
import { formatAddress, formatNumber } from '../lib/utils';
>>>>>>> 126ded7b6c59aa3e503a76a3fd3694b8f971c721
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import BoltIcon from '@mui/icons-material/Bolt';
import SecurityIcon from '@mui/icons-material/Security';
import SendIcon from '@mui/icons-material/Send';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
<<<<<<< HEAD
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import LanguageIcon from '@mui/icons-material/Language';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { useState, useEffect, useCallback } from 'react';
=======
import { useState, useEffect } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { ConnectButton } from '@rainbow-me/rainbowkit';
>>>>>>> 126ded7b6c59aa3e503a76a3fd3694b8f971c721

const GRADIENT = 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)';

const glassSurface = {
  background: 'background.paper',
  backdropFilter: 'blur(20px)',
  border: '1px solid',
  borderColor: 'rgba(255,255,255,0.08)',
  borderRadius: 4
};

const segmentedTabsSx = {
  minHeight: 44,
  backgroundColor: 'rgba(255,255,255,0.04)',
  borderRadius: 999,
  p: 0.5,
  border: '1px solid rgba(255,255,255,0.08)',
  '& .MuiTabs-indicator': { display: 'none' },
  '& .MuiTabs-flexContainer': { gap: 0.5 }
};

const segmentedTabSx = {
  minHeight: 36,
  px: 2.5,
  borderRadius: 999,
  textTransform: 'none' as const,
  fontWeight: 600,
  fontSize: '0.875rem',
  color: 'text.secondary',
  transition: 'color 0.2s, background 0.2s',
  '&.Mui-selected': {
    color: '#fff',
    background: GRADIENT
  }
};

function DataRow({
  label,
  value,
  href,
  copyValue,
  onCopy,
  copied
}: {
  label: string;
  value: string;
  href?: string;
  copyValue?: string;
  onCopy?: (value: string, field: string) => void;
  copied?: boolean;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        py: 1.5
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <Typography
          variant="body2"
          fontFamily="monospace"
          component={href ? 'a' : 'span'}
          href={href}
          target={href ? '_blank' : undefined}
          rel={href ? 'noopener noreferrer' : undefined}
          sx={{
            color: href ? 'primary.main' : 'text.primary',
            textDecoration: 'none',
            fontWeight: 500,
            '&:hover': href ? { textDecoration: 'underline' } : undefined
          }}
        >
          {value}
        </Typography>
        {copyValue && onCopy && (
          <Tooltip title={copied ? 'Copied!' : 'Copy'}>
            <IconButton size="small" onClick={() => onCopy(copyValue, label)}>
              {copied ? <CheckIcon sx={{ fontSize: 14 }} /> : <ContentCopyIcon sx={{ fontSize: 14 }} />}
            </IconButton>
          </Tooltip>
        )}
      </Stack>
    </Box>
  );
}

function AssetCard({
  icon,
  label,
  chipLabel,
  value,
  accentColor,
  caption
}: {
  icon: React.ReactNode;
  label: string;
  chipLabel?: string;
  chipColor?: string;
  value: string;
  accentColor: string;
  caption?: string;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        ...glassSurface,
        p: 3,
        height: '100%',
        transition: 'transform 0.2s, border-color 0.2s',
        '&:hover': { transform: 'translateY(-2px)', borderColor: accentColor }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: `${accentColor}1A`,
            color: accentColor
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', letterSpacing: 1, fontWeight: 600 }}
        >
          {label}
        </Typography>
      </Box>
      {chipLabel && (
        <Chip label={chipLabel} variant="outlined" size="small" clickable={false} sx={{ mb: 1.5 }} />
      )}
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, color: accentColor, fontVariantNumeric: 'tabular-nums' }}
      >
        {value}
      </Typography>
      {caption && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {caption}
        </Typography>
      )}
    </Paper>
  );
}

export default function AccountPage() {
  const {
    isConnected,
    address,
    balances,
<<<<<<< HEAD
    isLoading,
    connectWallet,
=======
>>>>>>> 126ded7b6c59aa3e503a76a3fd3694b8f971c721
    isOnHemiNetwork,
    switchToHemiNetwork,
    isSwitchingNetwork,
    sendTokens,
    isSendingTokens,
    fetchTransactionsByNetwork
  } = useRainbowKitWalletContext();

  const prefersReducedMotion = useReducedMotion();

  const [tab, setTab] = useState(0);
  const [networkTab, setNetworkTab] = useState(0);
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  const [sendFormData, setSendFormData] = useState({
    toAddress: '',
    amount: '',
    network: 'mainnet'
  });
  const [formError, setFormError] = useState('');
<<<<<<< HEAD
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
=======
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(false);

  interface Transaction {
    hash: string;
    type: string;
    value: string;
    status: string;
    date: string;
  }

>>>>>>> 126ded7b6c59aa3e503a76a3fd3694b8f971c721
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleCopy = useCallback((value: string, field: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  }, []);

  const handleCloseSendDialog = () => {
    setSendDialogOpen(false);
    setSendFormData({ toAddress: '', amount: '', network: 'mainnet' });
    setFormError('');
  };

  const handleSendTokensSubmit = async () => {
    if (!sendFormData.toAddress || sendFormData.toAddress.length !== 42 || !sendFormData.toAddress.startsWith('0x')) {
      setFormError('Invalid destination address');
      return;
    }

    if (!sendFormData.amount || parseFloat(sendFormData.amount) <= 0 || isNaN(parseFloat(sendFormData.amount))) {
      setFormError('Invalid amount');
      return;
    }

    const success = await sendTokens(
      sendFormData.toAddress,
      sendFormData.amount,
      sendFormData.network === 'mainnet'
    );

    if (success) {
      handleCloseSendDialog();
    }
  };

<<<<<<< HEAD
  const loadTransactions = useCallback(async () => {
    if (!address) return;
    const networkType = networkTab === 0 ? 'mainnet' : 'testnet';
    await fetchTransactionsByNetwork(address, networkType);
  }, [address, networkTab, fetchTransactionsByNetwork]);

  useEffect(() => {
    if (tab === 3 && address) {
      loadTransactions();
=======
  const loadTransactions = async () => {
    if (!address) {
      return;
>>>>>>> 126ded7b6c59aa3e503a76a3fd3694b8f971c721
    }
    
    setIsLoadingTransactions(true);
    try {
      const networkType = networkTab === 0 ? 'mainnet' : 'testnet';
      const txData = await fetchTransactionsByNetwork(address, networkType);
      setTransactions(txData);
    } catch (error) {
      console.error('Error loading transactions:', error);
      setTransactions([]);
    } finally {
      setIsLoadingTransactions(false);
    }
  };

<<<<<<< HEAD
  const panelMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.25, ease: 'easeOut' as const }
      };

  if (!isConnected) {
    return (
      <Container maxWidth="md" sx={{ mt: 10, py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              background: GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}
          >
            YOUR $HAIR HEADQUARTERS
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={400}>
            Manage your $HAIR tokens and view your transaction history
=======
  useEffect(() => {
    loadTransactions();
  }, [networkTab, address]);

  // Si pas connecté, afficher la page de connexion
  if (!isConnected) {
    return (
      <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ color: 'primary.main' }}>
            My Account
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Connect your wallet to access your $HAIR account
>>>>>>> 126ded7b6c59aa3e503a76a3fd3694b8f971c721
          </Typography>
        </Box>

        <Paper elevation={0} sx={{ ...glassSurface, maxWidth: 460, mx: 'auto', p: 5 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                width: 72,
                height: 72,
                mx: 'auto',
                mb: 3,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,107,53,0.1)'
              }}
            >
              <AccountBalanceWalletIcon sx={{ fontSize: 34, color: 'primary.main' }} />
            </Box>
            <Typography variant="h5" gutterBottom fontWeight={700}>
              Connect Your Wallet
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4 }}>
              Connect your wallet to access your $HAIR account, balances, and transaction history.
            </Typography>
<<<<<<< HEAD
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={connectWallet}
              disabled={isLoading}
              startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <AccountBalanceWalletIcon />}
              sx={{
                background: GRADIENT,
                fontWeight: 600,
                py: 1.25,
                '&:hover': { background: 'linear-gradient(135deg, #FF8C42 0%, #FFB74D 100%)' }
              }}
            >
              Connect Wallet
            </Button>
=======
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <ConnectButton
                chainStatus="icon"
                showBalance={false}
                accountStatus={{
                  smallScreen: 'avatar',
                  largeScreen: 'full',
                }}
              />
            </Box>
>>>>>>> 126ded7b6c59aa3e503a76a3fd3694b8f971c721
          </Box>
        </Paper>
      </Container>
    );
  }

  return (
<<<<<<< HEAD
    <Box sx={{ minHeight: '100vh', pt: 10, pb: 8 }}>
      <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: { xs: -8, md: 4 }, left: 8 }}>
          <Button size="small" component={RouterLink} to="/" variant="outlined" startIcon={<HomeIcon />}>
            Back to Home
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              background: GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}
          >
            YOUR $HAIR HEADQUARTERS
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={400}>
            Manage your $HAIR tokens and view your transaction history
          </Typography>
        </Box>

        {/* Wallet strip */}
        <Paper elevation={0} sx={{ ...glassSurface, p: 2.5, mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: isOnHemiNetwork ? 'success.main' : 'error.main',
                  boxShadow: isOnHemiNetwork ? '0 0 0 4px rgba(76,175,80,0.15)' : '0 0 0 4px rgba(244,67,54,0.15)'
                }}
              />
              <Typography variant="body1" fontFamily="monospace" fontWeight={500}>
                {address}
              </Typography>
              <Tooltip title={copiedField === 'wallet' ? 'Copied!' : 'Copy address'}>
                <IconButton size="small" onClick={() => address && handleCopy(address, 'wallet')}>
                  {copiedField === 'wallet' ? (
                    <CheckIcon sx={{ fontSize: 16 }} />
                  ) : (
                    <ContentCopyIcon sx={{ fontSize: 16 }} />
                  )}
                </IconButton>
              </Tooltip>
              <Chip
                size="small"
                label={isOnHemiNetwork ? 'Hemi Mainnet' : 'Wrong Network'}
                sx={{
                  fontWeight: 600,
                  color: '#fff',
                  backgroundColor: isOnHemiNetwork ? 'success.main' : 'error.main'
                }}
              />
            </Stack>

            {!isOnHemiNetwork && (
              <Stack alignItems="flex-end" spacing={0.5}>
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  onClick={switchToHemiNetwork}
                  disabled={isSwitchingNetwork}
                  startIcon={isSwitchingNetwork ? <CircularProgress size={16} /> : undefined}
                >
                  {isSwitchingNetwork ? 'Switching...' : 'Switch to Hemi Mainnet'}
                </Button>
                <Typography variant="caption" color="text.secondary">
                  If the automatic switch fails, add Hemi manually in your wallet
                </Typography>
              </Stack>
            )}
          </Box>
        </Paper>

        {/* Segmented tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Tabs value={tab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto" sx={segmentedTabsSx}>
            <Tab sx={segmentedTabSx} icon={<AccountBalanceWalletIcon sx={{ fontSize: 18 }} />} iconPosition="start" label="Wallet Info" />
            <Tab sx={segmentedTabSx} icon={<LanguageIcon sx={{ fontSize: 18 }} />} iconPosition="start" label="Network & Token" />
            <Tab sx={segmentedTabSx} icon={<SettingsIcon sx={{ fontSize: 18 }} />} iconPosition="start" label="Actions" />
            <Tab sx={segmentedTabSx} icon={<ReceiptLongIcon sx={{ fontSize: 18 }} />} iconPosition="start" label="Transactions" />
          </Tabs>
        </Box>

        <AnimatePresence mode="wait">
          {tab === 0 && (
            <motion.div key="wallet" {...panelMotion}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                  gap: 3
                }}
              >
                <AssetCard
                  icon={<CurrencyBitcoinIcon fontSize="small" />}
                  label="$HAIR Balance"
                  value={`${formatNumber(balances.hairMainnet)} HAIR`}
                  accentColor="#FF6B35"
                />
                <AssetCard
                  icon={<BoltIcon fontSize="small" />}
                  label="$HAIRPOINTS Balance"
                  value={`${formatNumber(balances.hairTestnet)} HAIR`}
                  accentColor="#4DABF7"
                />
                <AssetCard
                  icon={<SecurityIcon fontSize="small" />}
                  label="ETH Balance"
                  value={`${balances.eth} ETH`}
                  caption="For transaction fees"
                  accentColor="#22C55E"
                />
              </Box>
            </motion.div>
          )}

          {tab === 1 && (
            <motion.div key="network" {...panelMotion}>
              <Paper elevation={0} sx={{ ...glassSurface, p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight={700}>
                  Network Information
                </Typography>

                <Typography variant="overline" sx={{ color: 'success.main', fontWeight: 700, letterSpacing: 1 }}>
                  Mainnet
                </Typography>
                <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.08)' }} />
                <DataRow label="Network" value="Hemi Mainnet" />
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
                <DataRow label="Chain ID" value="43110" />
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
                <DataRow
                  label="RPC URL"
                  value="https://rpc.hemi.network/rpc"
                  copyValue="https://rpc.hemi.network/rpc"
                  onCopy={handleCopy}
                  copied={copiedField === 'RPC URL'}
                />
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
                <DataRow label="Explorer" value="explorer.hemi.xyz" href="https://explorer.hemi.xyz" />

                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1, mt: 3, display: 'block' }}>
                  Testnet
                </Typography>
                <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.08)' }} />
                <DataRow label="Network" value="Hemi Sepolia Testnet" />
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
                <DataRow label="Chain ID" value="743111" />
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
                <DataRow
                  label="RPC URL"
                  value="https://testnet.rpc.hemi.network/rpc"
                  copyValue="https://testnet.rpc.hemi.network/rpc"
                  onCopy={handleCopy}
                  copied={copiedField === 'RPC URL'}
                />
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
                <DataRow label="Explorer" value="testnet.explorer.hemi.xyz" href="https://testnet.explorer.hemi.xyz" />
              </Paper>

              <Paper elevation={0} sx={{ ...glassSurface, p: 3, mt: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight={700}>
                  Token Information
                </Typography>

                <Typography variant="overline" sx={{ color: 'success.main', fontWeight: 700, letterSpacing: 1 }}>
                  Mainnet Token (Live)
                </Typography>
                <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.08)' }} />
                <DataRow label="Token Name" value="$HAIR Token" />
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
                <DataRow label="Symbol" value="HAIR" />
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
                <DataRow label="Decimals" value="18" />
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
                <DataRow label="Total Supply" value="10,000,000,000 HAIR" />
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
                <DataRow
                  label="Contract"
                  value="0x5B77...4705"
                  href="https://explorer.hemi.xyz/address/0x5B774f563C902FA7b203FB7029ed6eD4Ce274705"
                  copyValue="0x5B774f563C902FA7b203FB7029ed6eD4Ce274705"
                  onCopy={handleCopy}
                  copied={copiedField === 'Contract'}
                />
                <DataRow label="Total Burned" value="~7,000,000 HAIR" />

                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1, mt: 3, display: 'block' }}>
                  Testnet Token
                </Typography>
                <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.08)' }} />
                <DataRow label="Token Name" value="$HAIR Token" />
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
                <DataRow label="Symbol" value="HAIR" />
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
                <DataRow label="Decimals" value="18" />
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
                <DataRow label="Total Supply" value="10,000,000,000 HAIR" />
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
                <DataRow
                  label="Contract"
                  value="0xa6Af...36F3"
                  href="https://testnet.explorer.hemi.xyz/address/0xa6Af91a69eee1E35887D5F229FA69f61021B36F3"
                  copyValue="0xa6Af91a69eee1E35887D5F229FA69f61021B36F3"
                  onCopy={handleCopy}
                  copied={copiedField === 'Contract'}
                />
              </Paper>
            </motion.div>
          )}

          {tab === 2 && (
            <motion.div key="actions" {...panelMotion}>
              <Paper elevation={0} sx={{ ...glassSurface, p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <SettingsIcon color="primary" />
                  <Typography variant="h6" fontWeight={700}>
                    Quick Actions
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                    gap: 2
                  }}
                >
                  {[
                    { icon: <SendIcon />, label: 'Send Tokens', onClick: () => setSendDialogOpen(true) },
                    {
                      icon: <ShoppingCartIcon />,
                      label: 'Buy More',
                      link: 'https://www.sushi.com/hemi/swap?token0=0x7A06C4AeF988e7925575C50261297a946aD204A8&token1=0x5B774f563C902FA7b203FB7029ed6eD4Ce274705&swapAmount='
                    },
                    {
                      icon: <BoltIcon />,
                      label: 'Provide Liquidity',
                      link: 'https://www.sushi.com/hemi/pool/v2/0x85218aa6cdc10b2300a74a712d12c7d849e530eb/add'
                    },
                    { icon: <OpenInNewIcon />, label: 'View Explorer', link: 'https://explorer.hemi.xyz' }
                  ].map((action, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      fullWidth
                      component={action.link ? 'a' : 'button'}
                      href={action.link}
                      target={action.link ? '_blank' : undefined}
                      rel={action.link ? 'noopener noreferrer' : undefined}
                      onClick={action.onClick}
                      sx={{
                        height: 90,
                        flexDirection: 'column',
                        gap: 1,
                        borderColor: 'rgba(255,255,255,0.12)',
                        transition: 'transform 0.15s, border-color 0.15s',
                        '&:hover': { transform: 'translateY(-2px)', borderColor: 'primary.main' }
                      }}
                    >
                      {action.icon}
                      <Typography variant="body2" fontWeight={600}>
                        {action.label}
                      </Typography>
                    </Button>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          )}

          {tab === 3 && (
            <motion.div key="transactions" {...panelMotion}>
              <Paper elevation={0} sx={{ ...glassSurface, p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
                  <Typography variant="h6" fontWeight={700}>
                    Transaction History
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<RefreshIcon />}
                    onClick={loadTransactions}
                    disabled={isLoadingTransactions}
                  >
                    Refresh
                  </Button>
                </Box>

                <Tabs value={networkTab} onChange={(_e, val) => setNetworkTab(val)} sx={{ ...segmentedTabsSx, display: 'inline-flex', mb: 3 }}>
                  <Tab sx={segmentedTabSx} label="Mainnet" />
                  <Tab sx={segmentedTabSx} label="Testnet" />
                </Tabs>

                {isLoadingTransactions ? (
                  <Box sx={{ textAlign: 'center', py: 6 }}>
                    <CircularProgress size={36} />
                    <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
                      Loading transactions...
                    </Typography>
                  </Box>
                ) : transactions.length === 0 ? (
                  <Box sx={{ textAlign: 'center', py: 6, color: 'text.secondary' }}>
                    <ReceiptLongIcon sx={{ fontSize: 40, mb: 1, opacity: 0.4 }} />
                    <Typography variant="body1">No transactions found for this network.</Typography>
                  </Box>
                ) : (
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>Hash</TableCell>
                          <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>Type</TableCell>
                          <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>Amount</TableCell>
                          <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>Status</TableCell>
                          <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>Date</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {transactions.map((tx, i) => (
                          <TableRow
                            key={tx.hash}
                            sx={{
                              backgroundColor: i % 2 === 1 ? 'rgba(255,255,255,0.02)' : 'transparent',
                              '&:hover': { backgroundColor: 'rgba(255,255,255,0.04)' }
                            }}
                          >
                            <TableCell>
                              <Stack direction="row" alignItems="center" spacing={0.5}>
                                <Typography
                                  component="a"
                                  href={`https://${networkTab === 0 ? '' : 'testnet.'}explorer.hemi.network/tx/${tx.hash}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  variant="body2"
                                  fontFamily="monospace"
                                  sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                >
                                  {tx.hash.slice(0, 8)}...{tx.hash.slice(-6)}
                                </Typography>
                                <Tooltip title={copiedField === tx.hash ? 'Copied!' : 'Copy hash'}>
                                  <IconButton size="small" onClick={() => handleCopy(tx.hash, tx.hash)}>
                                    {copiedField === tx.hash ? (
                                      <CheckIcon sx={{ fontSize: 14 }} />
                                    ) : (
                                      <ContentCopyIcon sx={{ fontSize: 14 }} />
                                    )}
                                  </IconButton>
                                </Tooltip>
                              </Stack>
                            </TableCell>
                            <TableCell>
                              <Chip
                                label={tx.type}
                                color={tx.type === 'Received' ? 'success' : 'primary'}
                                size="small"
                                variant="outlined"
                                clickable={false}
                              />
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="body2"
                                color={tx.type === 'Received' ? 'success.main' : 'primary.main'}
                                fontWeight={700}
                                fontFamily="monospace"
                              >
                                {tx.type === 'Received' ? '+' : '-'}
                                {parseFloat(tx.value).toFixed(2)} HAIR
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Chip
                                icon={tx.status === 'Success' ? <CheckCircleIcon sx={{ fontSize: 14 }} /> : <CancelIcon sx={{ fontSize: 14 }} />}
                                label={tx.status}
                                color={tx.status === 'Success' ? 'success' : 'error'}
                                size="small"
                                clickable={false}
                              />
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" color="text.secondary">
                                {new Date(tx.date).toLocaleDateString()}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Paper>
            </motion.div>
          )}
        </AnimatePresence>

        {formError && (
          <Alert severity="error" sx={{ mt: 4 }}>
            {formError}
          </Alert>
        )}
      </Container>

      <Dialog
        open={sendDialogOpen}
        onClose={handleCloseSendDialog}
        aria-labelledby="send-tokens-dialog-title"
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { ...glassSurface, borderRadius: 3 } }}
      >
        <DialogTitle id="send-tokens-dialog-title" sx={{ fontWeight: 700 }}>
          Send HAIR Tokens
        </DialogTitle>
        <DialogContent>
          <Chip
            label={
              sendFormData.network === 'mainnet'
                ? `${formatNumber(balances.hairMainnet)} HAIR available (Mainnet)`
                : `${formatNumber(balances.hairTestnet)} HAIR available (Testnet)`
            }
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
          />

          <TextField
            autoFocus
            margin="dense"
            id="toAddress"
            label="To Address"
            type="text"
            fullWidth
            placeholder="0x..."
            value={sendFormData.toAddress}
            onChange={(e) => setSendFormData({ ...sendFormData, toAddress: e.target.value })}
            error={sendFormData.toAddress !== '' && (sendFormData.toAddress.length !== 42 || !sendFormData.toAddress.startsWith('0x'))}
            helperText={
              sendFormData.toAddress !== '' && (sendFormData.toAddress.length !== 42 || !sendFormData.toAddress.startsWith('0x'))
                ? 'Please enter a valid Ethereum address'
                : ''
            }
          />

          <TextField
            margin="dense"
            id="amount"
            label="Amount (HAIR)"
            type="number"
            fullWidth
            placeholder="0.0"
            value={sendFormData.amount}
            onChange={(e) => setSendFormData({ ...sendFormData, amount: e.target.value })}
            error={sendFormData.amount !== '' && (parseFloat(sendFormData.amount) <= 0 || isNaN(parseFloat(sendFormData.amount)))}
            helperText={
              sendFormData.amount !== '' && (parseFloat(sendFormData.amount) <= 0 || isNaN(parseFloat(sendFormData.amount)))
                ? 'Please enter a valid amount'
                : ''
            }
          />

          <FormControl fullWidth margin="dense">
            <InputLabel id="network-label">Network</InputLabel>
            <Select
              labelId="network-label"
              id="network"
              value={sendFormData.network}
              label="Network"
              onChange={(e) => setSendFormData({ ...sendFormData, network: e.target.value })}
            >
              <MenuItem value="mainnet">Mainnet</MenuItem>
              <MenuItem value="testnet">Testnet</MenuItem>
            </Select>
          </FormControl>

          {formError && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {formError}
            </Alert>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={handleCloseSendDialog} disabled={isSendingTokens}>
            Cancel
          </Button>
          <Button
            onClick={handleSendTokensSubmit}
            disabled={
              isSendingTokens ||
              !sendFormData.toAddress ||
              !sendFormData.amount ||
              sendFormData.toAddress.length !== 42 ||
              !sendFormData.toAddress.startsWith('0x') ||
              parseFloat(sendFormData.amount) <= 0 ||
              isNaN(parseFloat(sendFormData.amount))
            }
            variant="contained"
            startIcon={isSendingTokens ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
            sx={{
              background: GRADIENT,
              fontWeight: 600,
              '&:hover': { background: 'linear-gradient(135deg, #FF8C42 0%, #FFB74D 100%)' }
            }}
=======
    <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>

      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ color: 'primary.main' }}>
          My Account
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your $HAIR tokens and view your transaction history
        </Typography>
      </Box>

      {/* Tabs */}
      <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'divider', 
        mb: 3, 
        display: 'flex', 
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <Tabs 
          value={tab} 
          onChange={handleTabChange} 
          aria-label="account tabs"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            '& .MuiTabs-scrollButtons': {
              '&.Mui-disabled': {
                opacity: 0.3,
              },
              display: { xs: 'flex', md: 'none' },
            },
            '& .MuiTab-root': {
              minWidth: 'auto',
              padding: { xs: '12px 16px', md: '12px 24px' },
              fontSize: { xs: '14px', md: '16px' },
            },
          }}
        >
          <Tab label="Overview" />
          <Tab label="Network Info" />
          <Tab label="Quick Actions" />
          <Tab label="Transaction History" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {tab === 0 && (
        <Box
          sx={{
            opacity: tabFade ? 1 : 0,
            transform: tabFade ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.3s, transform 0.3s',
          }}
        >
          {/* Account Info */}
          <Paper 
            elevation={0}
            sx={{ 
              p: 3, 
              mb: 4,
              background: 'background.paper',
              backdropFilter: 'blur(20px)',
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 4
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccountBalanceWalletIcon color="primary" />
                <Typography variant="h6">Connected Wallet</Typography>
              </Box>
              <Box 
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  backgroundColor: isOnHemiNetwork ? 'primary.main' : 'error.main',
                  color: 'white',
                  border: '1px solid',
                  borderColor: isOnHemiNetwork ? 'primary.main' : 'error.main',
                }}
              >
                {isOnHemiNetwork ? "Hemi Network" : "Wrong Network"}
              </Box>
            </Box>

            <Box sx={{ mb: 3, textAlign: 'left' }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Address
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body1" fontFamily="monospace">
                  {formatAddress(address)}
                </Typography>
                <IconButton size="small" sx={{ p: 0.5 }}>
                  <OpenInNewIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>

            {!isOnHemiNetwork && (
              <Alert severity="warning" sx={{ mb: 2 }}>
                You're not on the Hemi Network. Switch to Hemi Network to interact with $HAIR tokens.
              </Alert>
            )}

            {!isOnHemiNetwork && (
              <Button
                variant="contained"
                onClick={switchToHemiNetwork}
                disabled={isSwitchingNetwork}
                startIcon={isSwitchingNetwork ? <CircularProgress size={16} /> : <BoltIcon />}
                sx={{ mb: 2 }}
              >
                {isSwitchingNetwork ? 'Switching...' : 'Switch to Hemi Network'}
              </Button>
            )}
          </Paper>

          {/* Balances */}
          <Paper 
            elevation={0}
            sx={{ 
              p: 3, 
              mb: 4,
              background: 'background.paper',
              backdropFilter: 'blur(20px)',
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 4
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <CurrencyBitcoinIcon color="primary" />
              <Typography variant="h6">Token Balances</Typography>
            </Box>

            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3 
            }}>
              {/* ETH Balance */}
              <Box sx={{ textAlign: 'center', p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                <Typography variant="h6" color="primary.main" gutterBottom>
                  ETH Balance
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  {formatNumber(parseFloat(balances.eth))}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hemi Mainnet
                </Typography>
              </Box>

              {/* HAIR Mainnet */}
              <Box sx={{ textAlign: 'center', p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                <Typography variant="h6" color="primary.main" gutterBottom>
                  $HAIR Mainnet
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  {formatNumber(parseFloat(balances.hairMainnet))}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hemi Mainnet
                </Typography>
              </Box>

              {/* HAIR Balance */}
              <Box sx={{ textAlign: 'center', p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                <Typography variant="h6" color="primary.main" gutterBottom>
                  $HAIR Points Balance
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  {formatNumber(parseFloat(balances.hairTestnet))}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hemi Testnet
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      )}

      {tab === 1 && (
        <Box
          sx={{
            opacity: tabFade ? 1 : 0,
            transform: tabFade ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.3s, transform 0.3s',
          }}
        >
          {/* Network Information */}
          <Paper 
            elevation={0}
            sx={{ 
              p: 3, 
              mb: 4,
              background: 'background.paper',
              backdropFilter: 'blur(20px)',
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 4
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <SecurityIcon color="primary" />
              <Typography variant="h6">Network Information</Typography>
            </Box>

            {/* Mainnet Information */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                🌐 Mainnet
              </Typography>

              {/* Mainnet Network Info */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Network Information
                </Typography>
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                  gap: 2 
                }}>
                  <Box>
                    <Typography variant="body2">
                      <strong>Network:</strong> Hemi Mainnet
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      <strong>Chain ID:</strong> 43111
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      <strong>RPC URL:</strong> https://rpc.hemi.network/rpc
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      <strong>Explorer:</strong>{' '}
                      <MuiLink 
                        href="https://explorer.hemi.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                        sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                      >
                        explorer.hemi.xyz
                      </MuiLink>
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Mainnet Token Info */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Token Information
                </Typography>
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                  gap: 2 
                }}>
                  <Box>
                    <Typography variant="body2">
                      <strong>Contract Address:</strong>{' '}
                      <MuiLink 
                        href="https://explorer.hemi.xyz/address/0x5B774f563C902FA7b203FB7029ed6eD4Ce274705"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                        sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                      >
                        {formatAddress("0x5B774f563C902FA7b203FB7029ed6eD4Ce274705")}
                      </MuiLink>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      <strong>Token:</strong> $HAIR Mainnet
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      <strong>Decimals:</strong> 18
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      <strong>Total Supply:</strong> 10,000,000,000 HAIR
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Testnet Information */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                🧪 Testnet
              </Typography>
              
              {/* Testnet Network Info */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Network Information
                </Typography>
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                  gap: 2 
                }}>
                  <Box>
                    <Typography variant="body2">
                      <strong>Network:</strong> Hemi Sepolia Testnet
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      <strong>Chain ID:</strong> 743111
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      <strong>RPC URL:</strong> https://testnet.rpc.hemi.network/rpc
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      <strong>Explorer:</strong>{' '}
                      <MuiLink 
                        href="https://testnet.explorer.hemi.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                        sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                      >
                        testnet.explorer.hemi.xyz
                      </MuiLink>
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Testnet Token Info */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Token Information
                </Typography>
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                  gap: 2 
                }}>
                  <Box>
                    <Typography variant="body2">
                      <strong>Contract Address:</strong>{' '}
                      <MuiLink 
                        href="https://testnet.explorer.hemi.xyz/address/0xa6Af91a69eee1E35887D5F229FA69f61021B36F3"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                        sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                      >
                        {formatAddress("0xa6Af91a69eee1E35887D5F229FA69f61021B36F3")}
                      </MuiLink>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      <strong>Token:</strong> $HAIR Testnet
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      <strong>Decimals:</strong> 18
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      <strong>Total Supply:</strong> 10,000,000,000 HAIR
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      )}

      {tab === 2 && (
        <Box
          sx={{
            opacity: tabFade ? 1 : 0,
            transform: tabFade ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.3s, transform 0.3s',
          }}
        >
          {/* Quick Actions */}
          <Paper 
            elevation={0}
            sx={{ 
              p: 3, 
              mb: 4,
              background: 'background.paper',
              backdropFilter: 'blur(20px)',
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 4
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <SettingsIcon color="primary" />
                <Typography variant="h6">Quick Actions</Typography>
              </Box>
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 2 
              }}>
                {[
                  // { 
                  //   icon: <SendIcon />, 
                  //   label: 'Send Tokens',
                  //   onClick: handleSendTokens
                  // },
                  { 
                    icon: <ShoppingCartIcon />, 
                    label: 'Buy More',
                    link: 'https://www.sushi.com/hemi/swap?token0=0x7A06C4AeF988e7925575C50261297a946aD204A8&token1=0x5B774f563C902FA7b203FB7029ed6eD4Ce274705&swapAmount='
                  },
                  { 
                    icon: <BoltIcon />, 
                    label: 'Provide Liquidity',
                    link: 'https://www.sushi.com/hemi/pool/v2/0x85218aa6cdc10b2300a74a712d12c7d849e530eb/add'
                  },
                  { 
                    icon: <OpenInNewIcon />, 
                    label: 'View Explorer',
                    link: 'https://explorer.hemi.xyz'
                  }
                ].map((action, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    fullWidth
                    component={action.link ? 'a' : 'button'}
                    href={action.link}
                    target={action.link ? '_blank' : undefined}
                    rel={action.link ? 'noopener noreferrer' : undefined}
                    sx={{ 
                      height: 80, 
                      flexDirection: 'column',
                      gap: 1
                    }}
                  >
                    {action.icon}
                    {action.label}
                  </Button>
                ))}
              </Box>
          </Paper>
        </Box>
      )}

      {tab === 3 && (
        <Box
          sx={{
            opacity: tabFade ? 1 : 0,
            transform: tabFade ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.3s, transform 0.3s',
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 3,
              background: 'background.paper',
              backdropFilter: 'blur(20px)', 
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 4
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">Transaction History</Typography>
              <Button
                variant="outlined"
                size="small"
                startIcon={<RefreshIcon />}
                onClick={loadTransactions}
                disabled={isLoadingTransactions}
              >
                Refresh
              </Button>
            </Box>

            <Tabs
              value={networkTab}
              onChange={(_e, val) => setNetworkTab(val)}
              sx={{ mb: 3 }}
            >
              <Tab label="Mainnet" />
              <Tab label="Testnet" />
            </Tabs>

            {isLoadingTransactions ? (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <CircularProgress size={40} />
                <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
                  Loading transactions...
                </Typography>
              </Box>
            ) : transactions.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
                <Typography variant="body1" fontStyle="italic">
                  No transactions found for this network.
                </Typography>
              </Box>
            ) : (
              <>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Hash</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {transactions.map((tx) => (
                        <TableRow key={tx.hash}>
                          <TableCell>
                            <MuiLink 
                              href={`https://${networkTab === 0 ? 'explorer.hemi.xyz' : 'testnet.explorer.hemi.xyz'}/tx/${tx.hash}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ textDecoration: 'none' }}
                            >
                              {tx.hash.slice(0,8)}...{tx.hash.slice(-6)}
                            </MuiLink>
                          </TableCell>
                          <TableCell>
                            <Chip 
                              label={tx.type}
                              color={tx.type === 'Received' ? 'success' : 'primary'}
                              size="small"
                              variant="outlined"
                              clickable={false}
                            />
                          </TableCell>
                          <TableCell>
                            <Typography 
                              variant="body2" 
                              color={tx.type === 'Received' ? 'success.main' : 'primary.main'}
                              fontWeight="bold"
                            >
                              {tx.type === 'Received' ? '+' : '-'}{parseFloat(tx.value).toFixed(2)} HAIR
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Chip 
                              label={tx.status}
                              color={tx.status === 'Success' ? 'success' : 'error'}
                              size="small"
                              clickable={false}
                            />
                          </TableCell>
                          <TableCell>{new Date(tx.date).toLocaleDateString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
          </Paper>
        </Box>
      )}

      {/* Send Tokens Dialog */}
      <Dialog open={sendDialogOpen} onClose={handleCloseSendDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Send $HAIR Tokens</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 1 }}>
            <TextField
              fullWidth
              label="To Address"
              value={sendFormData.toAddress}
              onChange={(e) => setSendFormData({ ...sendFormData, toAddress: e.target.value })}
              placeholder="0x..."
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Amount"
              type="number"
              value={sendFormData.amount}
              onChange={(e) => setSendFormData({ ...sendFormData, amount: e.target.value })}
              placeholder="0.0"
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Network</InputLabel>
              <Select
                value={sendFormData.network}
                label="Network"
                onChange={(e) => setSendFormData({ ...sendFormData, network: e.target.value })}
              >
                <MenuItem value="mainnet">Hemi Mainnet</MenuItem>
                <MenuItem value="testnet">Hemi Testnet</MenuItem>
              </Select>
            </FormControl>
            {formError && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {formError}
              </Alert>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSendDialog}>Cancel</Button>
          <Button 
            onClick={handleSendTokensSubmit} 
            variant="contained"
            disabled={isSendingTokens}
            startIcon={isSendingTokens ? <CircularProgress size={16} /> : <SendIcon />}
>>>>>>> 126ded7b6c59aa3e503a76a3fd3694b8f971c721
          >
            {isSendingTokens ? 'Sending...' : 'Send Tokens'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}