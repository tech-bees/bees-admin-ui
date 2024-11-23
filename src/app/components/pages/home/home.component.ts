import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSidebarCollapsed = false;
  notificationsOpen = false;
  profileMenuOpen = false; // Added property for profile menu

  constructor(private snackBar: MatSnackBar) { }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  showNotification() {
    this.snackBar.open('Notification clicked', 'Close', {
      duration: 2000,
    });
  }

  toggleProfileMenu() {
    this.profileMenuOpen = !this.profileMenuOpen;
  }

  goToSettings() {
    console.log('Navigating to settings...');
  }

  goToProfile() {
    console.log('Navigating to profile...');
  }

  disableNotifications() {
    console.log('Disabling notifications...');
  }

  signOut() {
    console.log('Signing out...');
  }

  ngOnInit(): void {
  }
}
