import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'timezone',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  localTime: string = '';
  zoneTime: string = '';
  selectedZone: string = 'Asia/Kolkata';
  timeZones: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Update local time every second
    setInterval(() => {
      this.localTime = new Date().toLocaleString();
    }, 1000);

    // Fetch time zones list and selected zone time
    this.loadTimeZones();
    this.fetchZoneTime();

    // Update zone time every second
    setInterval(() => {
      this.fetchZoneTime();
    }, 1000);
  }

  loadTimeZones(): void {
    const url = `https://timeapi.io/api/TimeZone/AvailableTimeZones`;
    this.http.get<string[]>(url).subscribe({
      next: (data) => {
        this.timeZones = data;
      },
      error: (err) => {
        console.error('Failed to load time zones:', err);
      }
    });
  }

  fetchZoneTime(): void {
    const apiUrl = `https://timeapi.io/api/Time/current/zone?timeZone=${encodeURIComponent(this.selectedZone)}`;
    this.http.get<any>(apiUrl).subscribe({
      next: data => {
        if (data?.dateTime) {
          this.zoneTime = new Date(data.dateTime).toLocaleString();
        } else {
          this.zoneTime = 'Failed to load';
        }
      },
      error: err => {
        console.error('Error fetching zone time:', err);
        this.zoneTime = 'Failed to load';
      }
    });
  }

  onZoneChange(): void {
    this.fetchZoneTime();
  }
}
